export type TrailforgePanel = 'operations' | 'assignment' | 'recovery' | 'sync-settings' | 'system-status' | 'editor';

export type TrailforgeRecordStatus = 'ready' | 'draft' | 'sync-needed';

export interface TrailforgeRecord {
  id: string;
  name: string;
  code: string;
  status: TrailforgeRecordStatus;
  panel: TrailforgePanel;
  updatedAt: string;
}

export interface TrailforgeStorageStatus {
  mode: 'ready' | 'recovered' | 'unavailable';
  message: string;
}

export interface TrailforgeAppState {
  activeSurface: 'trailforge-offline-kit';
  route: TrailforgePanel;
  activePanel: TrailforgePanel;
  selectedRecordId: string | null;
  selectedRecord: TrailforgeRecord | null;
  records: TrailforgeRecord[];
  counts: {
    total: number;
    ready: number;
    drafts: number;
    syncNeeded: number;
  };
  storageStatus: TrailforgeStorageStatus;
  lastError: string | null;
  searchQuery: string;
}

export type TrailforgeAction =
  | { type: 'hydrate'; records: TrailforgeRecord[]; storageStatus: TrailforgeStorageStatus; lastError: string | null }
  | { type: 'navigate'; panel: TrailforgePanel }
  | { type: 'select'; recordId: string | null }
  | { type: 'createKit'; draft: TrailforgeRecord }
  | { type: 'saveKit'; updatedAt: string }
  | { type: 'retryLoad'; records: TrailforgeRecord[]; storageStatus: TrailforgeStorageStatus; lastError: string | null }
  | { type: 'setSearch'; query: string }
  | { type: 'clearFilters' };

export function createTrailforgeAppState(
  records: TrailforgeRecord[],
  storageStatus: TrailforgeStorageStatus = { mode: 'ready', message: 'Offline records are available.' },
  lastError: string | null = null,
): TrailforgeAppState {
  const selectedRecord = records[0] ?? null;
  return finalizeState({
    activeSurface: 'trailforge-offline-kit',
    route: 'operations',
    activePanel: 'operations',
    selectedRecordId: selectedRecord?.id ?? null,
    selectedRecord,
    records,
    counts: countRecords(records),
    storageStatus,
    lastError,
    searchQuery: '',
  });
}

export function trailforgeReducer(state: TrailforgeAppState, action: TrailforgeAction): TrailforgeAppState {
  switch (action.type) {
    case 'hydrate':
    case 'retryLoad':
      return finalizeState({
        ...state,
        records: action.records,
        selectedRecordId: action.records[0]?.id ?? null,
        storageStatus: action.storageStatus,
        lastError: action.lastError,
      });
    case 'navigate':
      return finalizeState({
        ...state,
        route: action.panel,
        activePanel: action.panel,
      });
    case 'select':
      return finalizeState({
        ...state,
        selectedRecordId: action.recordId,
      });
    case 'createKit': {
      return finalizeState({
        ...state,
        records: [action.draft, ...state.records],
        selectedRecordId: action.draft.id,
        route: 'editor',
        activePanel: 'editor',
        lastError: null,
      });
    }
    case 'saveKit':
      return finalizeState({
        ...state,
        records: state.records.map((record) =>
          record.id === state.selectedRecordId
            ? { ...record, status: 'ready', panel: 'operations', updatedAt: action.updatedAt }
            : record,
        ),
        route: 'operations',
        activePanel: 'operations',
        lastError: null,
      });
    case 'setSearch':
      return finalizeState({ ...state, searchQuery: action.query });
    case 'clearFilters':
      return finalizeState({ ...state, searchQuery: '' });
    default:
      return state;
  }
}

function finalizeState(state: TrailforgeAppState): TrailforgeAppState {
  const selectedRecord = state.records.find((record) => record.id === state.selectedRecordId) ?? state.records[0] ?? null;
  return {
    ...state,
    selectedRecordId: selectedRecord?.id ?? null,
    selectedRecord,
    counts: countRecords(state.records),
  };
}

function countRecords(records: TrailforgeRecord[]): TrailforgeAppState['counts'] {
  return records.reduce<TrailforgeAppState['counts']>(
    (counts, record) => {
      if (record.status === 'ready') {
        counts.ready += 1;
      }
      if (record.status === 'draft') {
        counts.drafts += 1;
      }
      if (record.status === 'sync-needed') {
        counts.syncNeeded += 1;
      }

      counts.total += 1;
      return counts;
    },
    { total: 0, ready: 0, drafts: 0, syncNeeded: 0 },
  );
}
