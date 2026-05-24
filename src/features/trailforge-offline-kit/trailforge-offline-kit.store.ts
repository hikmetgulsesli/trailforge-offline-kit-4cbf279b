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
  | { type: 'createKit' }
  | { type: 'saveKit' }
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
      const createdAt = new Date().toISOString();
      const draft: TrailforgeRecord = {
        id: `kit-${Date.now()}`,
        name: 'Untitled Offline Kit',
        code: 'RT-NEW-00',
        status: 'draft',
        panel: 'editor',
        updatedAt: createdAt,
      };
      return finalizeState({
        ...state,
        records: [draft, ...state.records],
        selectedRecordId: draft.id,
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
            ? { ...record, status: 'ready', panel: 'operations', updatedAt: new Date().toISOString() }
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
  return {
    total: records.length,
    ready: records.filter((record) => record.status === 'ready').length,
    drafts: records.filter((record) => record.status === 'draft').length,
    syncNeeded: records.filter((record) => record.status === 'sync-needed').length,
  };
}
