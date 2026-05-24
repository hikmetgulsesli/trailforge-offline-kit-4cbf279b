import type { TrailforgeAppState } from '../features/trailforge-offline-kit/trailforge-offline-kit.store';

export interface TrailforgeRuntimeBridge {
  state: TrailforgeAppState;
  actions: Record<string, () => void>;
}

export function readTrailforgeRuntimeBridge(): TrailforgeRuntimeBridge | undefined {
  return (globalThis as typeof globalThis & { app?: TrailforgeRuntimeBridge }).app;
}
