// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Kit Operations - TrailForge Offline Kit
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Check, ChevronRight, Circle, ListFilter, Pencil, Search, Settings, User } from "lucide-react";


export type KitOperationsTrailforgeOfflineKitActionId = "operations-1" | "assignment-2" | "recovery-3" | "new-log-4" | "sync-settings-5" | "system-status-6" | "button-7-7" | "button-8-8" | "button-9-9" | "create-kit-10" | "filter-11" | "retry-12" | "button-13-13";

export interface KitOperationsTrailforgeOfflineKitProps {
  actions?: Partial<Record<KitOperationsTrailforgeOfflineKitActionId, () => void>>;
}

export function KitOperationsTrailforgeOfflineKit({ actions }: KitOperationsTrailforgeOfflineKitProps) {
  return (
    <>
      {/* SideNavBar Component */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-surface-container flex flex-col py-stack-md border-r-2 border-outline-variant z-40">
      {/* Header */}
      <div className="px-stack-md mb-margin-desktop flex items-center gap-stack-sm">
      <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
      <Circle className="text-on-primary text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h2 className="font-headline-md text-headline-md font-black text-primary uppercase">Field Operations</h2>
      <p className="font-label-caps text-label-caps text-on-surface-variant">Unit 04 - Active</p>
      </div>
      </div>
      {/* Main Tabs */}
      <div className="flex-grow px-stack-sm flex flex-col gap-unit">
      {/* Active Tab */}
      <button className="w-full flex items-center gap-stack-sm px-stack-sm py-stack-sm text-left bg-primary text-on-primary font-bold border-l-4 border-secondary-container rounded-r-DEFAULT transition-colors" type="button" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Operations</span>
      </button>
      {/* Inactive Tabs */}
      <button className="w-full flex items-center gap-stack-sm px-stack-sm py-stack-sm text-left text-on-surface-variant hover:bg-surface-container-highest transition-colors border-l-4 border-transparent rounded-r-DEFAULT" type="button" data-action-id="assignment-2" onClick={actions?.["assignment-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Assignment</span>
      </button>
      <button className="w-full flex items-center gap-stack-sm px-stack-sm py-stack-sm text-left text-on-surface-variant hover:bg-surface-container-highest transition-colors border-l-4 border-transparent rounded-r-DEFAULT" type="button" data-action-id="recovery-3" onClick={actions?.["recovery-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Recovery</span>
      </button>
      </div>
      {/* Footer / CTA */}
      <div className="px-stack-md mt-auto pt-stack-md border-t-2 border-outline-variant flex flex-col gap-stack-sm">
      <button className="w-full flex justify-center items-center py-stack-sm bg-primary text-on-primary font-label-caps text-label-caps rounded uppercase hover:bg-primary-container transition-colors" type="button" data-action-id="new-log-4" onClick={actions?.["new-log-4"]}>
                      New Log
                  </button>
      <div className="flex flex-col gap-unit mt-stack-sm">
      <button className="w-full flex items-center gap-stack-sm px-stack-sm py-unit text-left text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded" type="button" data-action-id="sync-settings-5" onClick={actions?.["sync-settings-5"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Sync Settings</span>
      </button>
      <button className="w-full flex items-center gap-stack-sm px-stack-sm py-unit text-left text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded" type="button" data-action-id="system-status-6" onClick={actions?.["system-status-6"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">System Status</span>
      </button>
      </div>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-grow ml-64 flex flex-col min-h-screen">
      {/* TopAppBar Component */}
      <header className="flex justify-between items-center w-full px-margin-desktop h-16 z-50 bg-surface border-b-2 border-outline-variant sticky top-0">
      <div className="flex items-center gap-stack-md">
      <h1 className="font-headline-md text-headline-md font-extrabold tracking-tighter text-primary">TrailForge</h1>
      {/* Search Bar on left */}
      <div className="hidden lg:flex items-center bg-surface-container border border-outline-variant rounded px-stack-sm py-unit">
      <Search className="text-on-surface-variant text-[20px] mr-unit" aria-hidden={true} focusable="false" />
      <input className="bg-transparent border-none text-body-md focus:ring-0 p-0 text-on-surface w-48 placeholder-on-surface-variant" placeholder="Search Records..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-stack-md">
      <div className="flex items-center gap-unit">
      <button className="p-unit text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded" title="Sync" type="button" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="p-unit text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded" title="Offline Mode" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="p-unit text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded" title="Settings" type="button" data-action-id="button-9-9" onClick={actions?.["button-9-9"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      <button className="bg-primary text-on-primary px-stack-md py-stack-sm font-label-caps text-label-caps rounded uppercase hover:bg-primary-container transition-colors shadow-none border border-transparent active:scale-[0.98]" type="button" data-action-id="create-kit-10" onClick={actions?.["create-kit-10"]}>
                          Create Kit
                      </button>
      <div className="w-8 h-8 rounded bg-surface-container-highest border border-outline-variant overflow-hidden flex items-center justify-center">
      <User className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-grow p-margin-desktop flex gap-gutter overflow-hidden h-[calc(100vh-64px)]">
      {/* Left Column: Metrics & Table */}
      <div className="flex-grow flex flex-col min-w-0 overflow-y-auto pr-stack-sm">
      {/* Page Title */}
      <div className="mb-stack-md flex justify-between items-end">
      <div>
      <h2 className="font-headline-lg text-headline-lg text-primary">Kit Operations</h2>
      <p className="font-body-md text-on-surface-variant mt-unit">Manage and monitor field deployment readiness.</p>
      </div>
      <div className="flex gap-stack-sm">
      <button className="flex items-center gap-unit px-stack-sm py-unit border-2 border-outline-variant text-on-surface font-label-caps text-label-caps rounded hover:bg-surface-container transition-colors" type="button" data-action-id="filter-11" onClick={actions?.["filter-11"]}>
      <ListFilter className="text-[18px]" aria-hidden={true} focusable="false" />
                                  Filter
                              </button>
      </div>
      </div>
      {/* Summary Metrics (Bento-ish dense grid) */}
      <div className="grid grid-cols-4 gap-gutter mb-stack-md">
      <div className="bg-surface border-2 border-outline-variant p-stack-sm rounded-DEFAULT flex flex-col justify-between">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Total Kits</span>
      <span className="font-data-mono text-headline-lg mt-stack-xs text-primary">12</span>
      </div>
      <div className="bg-surface border-2 border-outline-variant p-stack-sm rounded-DEFAULT flex flex-col justify-between border-b-4 border-b-primary-fixed">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Ready for Offline</span>
      <span className="font-data-mono text-headline-lg mt-stack-xs text-primary">8</span>
      </div>
      <div className="bg-surface border-2 border-outline-variant p-stack-sm rounded-DEFAULT flex flex-col justify-between border-b-4 border-b-secondary-container">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Missing Safety Gear</span>
      <span className="font-data-mono text-headline-lg mt-stack-xs text-secondary-container">3</span>
      </div>
      <div className="bg-surface border-2 border-error p-stack-sm rounded-DEFAULT flex flex-col justify-between bg-error-container">
      <span className="font-label-caps text-label-caps text-on-error-container uppercase">Sync Conflicts</span>
      <div className="flex justify-between items-end mt-stack-xs">
      <span className="font-data-mono text-headline-lg text-on-error-container">1</span>
      <button className="font-label-caps text-label-caps text-on-error-container underline hover:opacity-80" type="button" data-action-id="retry-12" onClick={actions?.["retry-12"]}>Retry</button>
      </div>
      </div>
      </div>
      {/* Data Table Container */}
      <div className="bg-surface border-2 border-outline-variant rounded-DEFAULT flex-grow overflow-auto">
      <table className="w-full text-left border-collapse">
      <thead className="bg-surface-container-low sticky top-0 z-10 border-b-2 border-outline-variant">
      <tr>
      <th className="py-stack-sm px-stack-md font-label-caps text-label-caps text-on-surface-variant uppercase">Kit Name</th>
      <th className="py-stack-sm px-stack-md font-label-caps text-label-caps text-on-surface-variant uppercase">Status</th>
      <th className="py-stack-sm px-stack-md font-label-caps text-label-caps text-on-surface-variant uppercase">Assigned Team</th>
      <th className="py-stack-sm px-stack-md font-label-caps text-label-caps text-on-surface-variant uppercase">Last Sync</th>
      <th className="py-stack-sm px-stack-md w-10"></th>
      </tr>
      </thead>
      <tbody className="font-body-md">
      {/* Selected Row */}
      <tr className="border-b border-outline-variant bg-surface-container h-8 hover:bg-surface-container-highest cursor-pointer border-l-4 border-l-primary">
      <td className="py-unit px-stack-md font-body-lg text-primary">North Ridge Alpha</td>
      <td className="py-unit px-stack-md">
      <span className="inline-block px-2 py-1 bg-primary-fixed text-on-primary-fixed font-label-caps text-[10px] uppercase rounded-sm border border-primary-fixed-dim">Ready</span>
      </td>
      <td className="py-unit px-stack-md text-on-surface">Alpha Unit</td>
      <td className="py-unit px-stack-md font-data-mono text-data-mono text-on-surface-variant">10:42 AM</td>
      <td className="py-unit px-stack-md text-right">
      <ChevronRight className="text-[18px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </td>
      </tr>
      {/* Normal Rows */}
      <tr className="border-b border-outline-variant h-8 hover:bg-surface-container-highest cursor-pointer">
      <td className="py-unit px-stack-md text-on-surface">Valley Sector 7</td>
      <td className="py-unit px-stack-md">
      <span className="inline-block px-2 py-1 bg-secondary-fixed text-on-secondary-fixed font-label-caps text-[10px] uppercase rounded-sm border border-secondary-fixed-dim">Missing Gear</span>
      </td>
      <td className="py-unit px-stack-md text-on-surface">Bravo Unit</td>
      <td className="py-unit px-stack-md font-data-mono text-data-mono text-on-surface-variant">09:15 AM</td>
      <td className="py-unit px-stack-md text-right"></td>
      </tr>
      <tr className="border-b border-outline-variant h-8 hover:bg-surface-container-highest cursor-pointer">
      <td className="py-unit px-stack-md text-on-surface">Peak Echo</td>
      <td className="py-unit px-stack-md">
      <span className="inline-block px-2 py-1 bg-error-container text-on-error-container font-label-caps text-[10px] uppercase rounded-sm border border-error">Conflict</span>
      </td>
      <td className="py-unit px-stack-md text-on-surface">Charlie Unit</td>
      <td className="py-unit px-stack-md font-data-mono text-data-mono text-on-surface-variant">Yesterday</td>
      <td className="py-unit px-stack-md text-right"></td>
      </tr>
      <tr className="border-b border-outline-variant h-8 hover:bg-surface-container-highest cursor-pointer">
      <td className="py-unit px-stack-md text-on-surface">River Delta</td>
      <td className="py-unit px-stack-md">
      <span className="inline-block px-2 py-1 bg-primary-fixed text-on-primary-fixed font-label-caps text-[10px] uppercase rounded-sm border border-primary-fixed-dim">Ready</span>
      </td>
      <td className="py-unit px-stack-md text-on-surface">Delta Unit</td>
      <td className="py-unit px-stack-md font-data-mono text-data-mono text-on-surface-variant">Yesterday</td>
      <td className="py-unit px-stack-md text-right"></td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      {/* Right Column: Side Panel */}
      <aside className="w-80 bg-surface border-2 border-outline-variant rounded-DEFAULT flex flex-col flex-shrink-0">
      {/* Panel Header */}
      <div className="p-stack-md border-b-2 border-outline-variant bg-surface-container-low flex justify-between items-start">
      <div>
      <span className="font-label-caps text-[10px] text-on-surface-variant uppercase mb-unit block">Selected Kit</span>
      <h3 className="font-headline-md text-headline-md text-primary">North Ridge Alpha</h3>
      <span className="inline-block px-2 py-1 bg-primary-fixed text-on-primary-fixed font-label-caps text-[10px] uppercase rounded-sm mt-stack-xs border border-primary-fixed-dim">Ready</span>
      </div>
      <button className="p-unit border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors rounded" title="Edit" type="button" data-action-id="button-13-13" onClick={actions?.["button-13-13"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Panel Content */}
      <div className="p-stack-md flex-grow overflow-y-auto">
      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-stack-sm mb-stack-md pb-stack-md border-b border-outline-variant">
      <div>
      <span className="font-label-caps text-[10px] text-on-surface-variant uppercase block">Assigned Team</span>
      <span className="font-body-md text-on-surface mt-unit block">Alpha Unit</span>
      </div>
      <div>
      <span className="font-label-caps text-[10px] text-on-surface-variant uppercase block">Area Code</span>
      <span className="font-data-mono text-data-mono text-on-surface mt-unit block">NR-01-A</span>
      </div>
      <div>
      <span className="font-label-caps text-[10px] text-on-surface-variant uppercase block">Items Count</span>
      <span className="font-data-mono text-data-mono text-on-surface mt-unit block">42/42</span>
      </div>
      <div>
      <span className="font-label-caps text-[10px] text-on-surface-variant uppercase block">Size</span>
      <span className="font-data-mono text-data-mono text-on-surface mt-unit block">1.2 GB</span>
      </div>
      </div>
      {/* Activity Log */}
      <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-stack-sm">Recent Activity</h4>
      <div className="flex flex-col relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant">
      <div className="flex gap-stack-sm mb-stack-sm relative z-10">
      <div className="w-6 h-6 rounded-full bg-primary-fixed border-2 border-surface flex items-center justify-center flex-shrink-0">
      <Check className="text-[12px] text-on-primary-fixed" aria-hidden={true} focusable="false" />
      </div>
      <div className="pt-unit">
      <p className="font-body-md text-on-surface leading-tight">Gear check passed</p>
      <span className="font-data-mono text-[11px] text-on-surface-variant">10:42 AM</span>
      </div>
      </div>
      <div className="flex gap-stack-sm mb-stack-sm relative z-10">
      <div className="w-6 h-6 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center flex-shrink-0">
      <Circle className="text-[12px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <div className="pt-unit">
      <p className="font-body-md text-on-surface leading-tight">Route updated</p>
      <span className="font-data-mono text-[11px] text-on-surface-variant">08:15 AM</span>
      </div>
      </div>
      <div className="flex gap-stack-sm relative z-10">
      <div className="w-6 h-6 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center flex-shrink-0">
      <Circle className="text-[12px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <div className="pt-unit">
      <p className="font-body-md text-on-surface leading-tight">Base maps synced</p>
      <span className="font-data-mono text-[11px] text-on-surface-variant">Yesterday, 18:00</span>
      </div>
      </div>
      </div>
      </div>
      </aside>
      </main>
      </div>
    </>
  );
}
