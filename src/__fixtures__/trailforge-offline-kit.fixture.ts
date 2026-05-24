import type { TrailforgeRecord } from '../features/trailforge-offline-kit/trailforge-offline-kit.store';

export const trailforgeOfflineKitFixture: TrailforgeRecord[] = [
  {
    id: 'kit-ridge-01',
    name: 'Ridge Traverse Offline Kit',
    code: 'RT-4102-01',
    status: 'ready',
    panel: 'operations',
    updatedAt: '2026-05-24T18:30:00.000Z',
  },
  {
    id: 'kit-canyon-02',
    name: 'Canyon Recovery Pack',
    code: 'CR-2204-02',
    status: 'sync-needed',
    panel: 'recovery',
    updatedAt: '2026-05-24T19:05:00.000Z',
  },
  {
    id: 'kit-base-03',
    name: 'Base Camp Gear Assignment',
    code: 'BA-1208-03',
    status: 'draft',
    panel: 'assignment',
    updatedAt: '2026-05-24T19:45:00.000Z',
  },
];
