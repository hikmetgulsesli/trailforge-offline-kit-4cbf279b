import { useEffect, useMemo, useReducer } from 'react';
import {
  EmptyAndErrorRecoveryTrailforgeOfflineKit,
  GearPackAssignmentTrailforgeOfflineKit,
  KitEditorTrailforgeOfflineKit,
  KitOperationsTrailforgeOfflineKit,
  type EmptyAndErrorRecoveryTrailforgeOfflineKitActionId,
  type GearPackAssignmentTrailforgeOfflineKitActionId,
  type KitEditorTrailforgeOfflineKitActionId,
  type KitOperationsTrailforgeOfflineKitActionId,
} from './screens';
import { loadTrailforgeSnapshot, persistTrailforgeState } from './features/trailforge-offline-kit/trailforge-offline-kit.repo';
import {
  createTrailforgeAppState,
  trailforgeReducer,
  type TrailforgePanel,
} from './features/trailforge-offline-kit/trailforge-offline-kit.store';

type RuntimeActions = Record<string, () => void>;

declare global {
  interface Window {
    app?: {
      state: ReturnType<typeof createTrailforgeAppState>;
      actions: RuntimeActions;
    };
  }
}

const initialSnapshot = loadTrailforgeSnapshot();

export default function App() {
  const [state, dispatch] = useReducer(
    trailforgeReducer,
    createTrailforgeAppState(initialSnapshot.records, initialSnapshot.storageStatus, initialSnapshot.lastError),
  );

  const actions = useMemo<RuntimeActions>(
    () => ({
      navigateOperations: () => dispatch({ type: 'navigate', panel: 'operations' }),
      navigateAssignment: () => dispatch({ type: 'navigate', panel: 'assignment' }),
      navigateRecovery: () => dispatch({ type: 'navigate', panel: 'recovery' }),
      navigateSyncSettings: () => dispatch({ type: 'navigate', panel: 'sync-settings' }),
      navigateSystemStatus: () => dispatch({ type: 'navigate', panel: 'system-status' }),
      createKit: () => dispatch({ type: 'createKit' }),
      saveKit: () => dispatch({ type: 'saveKit' }),
      cancelEdit: () => dispatch({ type: 'navigate', panel: 'operations' }),
      retryLoad: () => {
        const snapshot = loadTrailforgeSnapshot();
        dispatch({
          type: 'retryLoad',
          records: snapshot.records,
          storageStatus: snapshot.storageStatus,
          lastError: snapshot.lastError,
        });
      },
      clearFilters: () => dispatch({ type: 'clearFilters' }),
      selectFirstRecord: () => dispatch({ type: 'select', recordId: state.records[0]?.id ?? null }),
    }),
    [state.records],
  );

  useEffect(() => {
    persistTrailforgeState(state);
  }, [state]);

  useEffect(() => {
    window.app = { state, actions };
    (globalThis as typeof globalThis & { app?: Window['app'] }).app = { state, actions };
  }, [actions, state]);

  const navigationActions = {
    operations: actions.navigateOperations,
    assignment: actions.navigateAssignment,
    recovery: actions.navigateRecovery,
    syncSettings: actions.navigateSyncSettings,
    systemStatus: actions.navigateSystemStatus,
  };

  return (
    <div data-setfarm-root="trailforge-offline-kit" data-active-panel={state.activePanel} className="min-h-screen bg-slate-50 text-slate-950">
      {renderActiveScreen(state.activePanel, actions, navigationActions)}
    </div>
  );
}

function renderActiveScreen(
  activePanel: TrailforgePanel,
  actions: RuntimeActions,
  navigationActions: {
    operations: () => void;
    assignment: () => void;
    recovery: () => void;
    syncSettings: () => void;
    systemStatus: () => void;
  },
) {
  switch (activePanel) {
    case 'assignment':
      return (
        <GearPackAssignmentTrailforgeOfflineKit
          actions={
            {
              'create-kit-1': actions.createKit,
              'new-log-2': actions.createKit,
              'search-records-3': actions.selectFirstRecord,
              'filter-insights-4': actions.clearFilters,
              'execute-transfer-8': actions.selectFirstRecord,
              'operations-1': navigationActions.operations,
              'assignment-2': navigationActions.assignment,
              'recovery-3': navigationActions.recovery,
              'sync-settings-4': navigationActions.syncSettings,
              'system-status-5': navigationActions.systemStatus,
            } satisfies Partial<Record<GearPackAssignmentTrailforgeOfflineKitActionId, () => void>>
          }
        />
      );
    case 'recovery':
    case 'sync-settings':
    case 'system-status':
      return (
        <EmptyAndErrorRecoveryTrailforgeOfflineKit
          actions={
            {
              'new-log-1': actions.createKit,
              'create-kit-5': actions.createKit,
              'retry-load-6': actions.retryLoad,
              'create-first-kit-7': actions.createKit,
              'operations-1': navigationActions.operations,
              'assignment-2': navigationActions.assignment,
              'recovery-3': navigationActions.recovery,
              'sync-settings-4': navigationActions.syncSettings,
              'system-status-5': navigationActions.systemStatus,
              'clear-all-filters-6': actions.clearFilters,
            } satisfies Partial<Record<EmptyAndErrorRecoveryTrailforgeOfflineKitActionId, () => void>>
          }
        />
      );
    case 'editor':
      return (
        <KitEditorTrailforgeOfflineKit
          actions={
            {
              'button-1-1': actions.cancelEdit,
              'new-log-5': actions.createKit,
              'cancel-6': actions.cancelEdit,
              'save-kit-7': actions.saveKit,
              'operations-1': navigationActions.operations,
              'assignment-2': navigationActions.assignment,
              'recovery-3': navigationActions.recovery,
              'sync-settings-4': navigationActions.syncSettings,
              'system-status-5': navigationActions.systemStatus,
            } satisfies Partial<Record<KitEditorTrailforgeOfflineKitActionId, () => void>>
          }
        />
      );
    case 'operations':
    default:
      return (
        <KitOperationsTrailforgeOfflineKit
          actions={
            {
              'operations-1': navigationActions.operations,
              'assignment-2': navigationActions.assignment,
              'recovery-3': navigationActions.recovery,
              'new-log-4': actions.createKit,
              'sync-settings-5': navigationActions.syncSettings,
              'system-status-6': navigationActions.systemStatus,
              'create-kit-10': actions.createKit,
              'filter-11': actions.clearFilters,
              'retry-12': actions.retryLoad,
              'button-13-13': actions.selectFirstRecord,
            } satisfies Partial<Record<KitOperationsTrailforgeOfflineKitActionId, () => void>>
          }
        />
      );
  }
}
