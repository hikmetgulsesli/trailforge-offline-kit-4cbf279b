import { trailforgeOfflineKitFixture } from '../../__fixtures__/trailforge-offline-kit.fixture';
import type { TrailforgeAppState, TrailforgeRecord, TrailforgeStorageStatus } from './trailforge-offline-kit.store';

const STORAGE_KEY = 'trailforge-offline-kit.records';

export interface TrailforgeRepositorySnapshot {
  records: TrailforgeRecord[];
  storageStatus: TrailforgeStorageStatus;
  lastError: string | null;
}

export function loadTrailforgeSnapshot(storage: Storage | undefined = getStorage()): TrailforgeRepositorySnapshot {
  if (!storage) {
    return {
      records: trailforgeOfflineKitFixture,
      storageStatus: { mode: 'unavailable', message: 'Local storage is unavailable; using fixture records.' },
      lastError: 'Local storage is unavailable.',
    };
  }

  const rawRecords = storage.getItem(STORAGE_KEY);
  if (!rawRecords) {
    persistTrailforgeRecords(trailforgeOfflineKitFixture, storage);
    return {
      records: trailforgeOfflineKitFixture,
      storageStatus: { mode: 'ready', message: 'Seeded offline records for this device.' },
      lastError: null,
    };
  }

  try {
    const parsed = JSON.parse(rawRecords);
    if (!Array.isArray(parsed) || !parsed.every(isTrailforgeRecord)) {
      throw new Error('Stored records are not valid TrailForge records.');
    }

    return {
      records: parsed,
      storageStatus: { mode: 'ready', message: 'Loaded offline records from this device.' },
      lastError: null,
    };
  } catch (error) {
    persistTrailforgeRecords(trailforgeOfflineKitFixture, storage);
    return {
      records: trailforgeOfflineKitFixture,
      storageStatus: { mode: 'recovered', message: 'Recovered from corrupted local records with safe defaults.' },
      lastError: error instanceof Error ? error.message : 'Stored records could not be read.',
    };
  }
}

export function persistTrailforgeState(state: TrailforgeAppState, storage: Storage | undefined = getStorage()): void {
  persistTrailforgeRecords(state.records, storage);
}

export function persistTrailforgeRecords(records: TrailforgeRecord[], storage: Storage | undefined = getStorage()): void {
  storage?.setItem(STORAGE_KEY, JSON.stringify(records));
}

function getStorage(): Storage | undefined {
  try {
    return typeof window === 'undefined' ? undefined : window.localStorage;
  } catch {
    return undefined;
  }
}

function isTrailforgeRecord(value: unknown): value is TrailforgeRecord {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const record = value as TrailforgeRecord;
  return (
    typeof record.id === 'string' &&
    typeof record.name === 'string' &&
    typeof record.code === 'string' &&
    ['ready', 'draft', 'sync-needed'].includes(record.status) &&
    typeof record.panel === 'string' &&
    typeof record.updatedAt === 'string'
  );
}
