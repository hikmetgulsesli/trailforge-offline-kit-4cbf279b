// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - TrailForge Offline Kit
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Plus, Search, Settings, User } from "lucide-react";


export type EmptyAndErrorRecoveryTrailforgeOfflineKitActionId = "new-log-1" | "button-2-2" | "button-3-3" | "button-4-4" | "create-kit-5" | "retry-load-6" | "create-first-kit-7" | "operations-1" | "assignment-2" | "recovery-3" | "sync-settings-4" | "system-status-5" | "clear-all-filters-6" | "link-7" | "link-8" | "link-9";

export interface EmptyAndErrorRecoveryTrailforgeOfflineKitProps {
  actions?: Partial<Record<EmptyAndErrorRecoveryTrailforgeOfflineKitActionId, () => void>>;
}

export function EmptyAndErrorRecoveryTrailforgeOfflineKit({ actions }: EmptyAndErrorRecoveryTrailforgeOfflineKitProps) {
  return (
    <>
      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex flex-col h-full fixed left-0 top-0 w-64 bg-surface-container py-stack-md border-r-2 border-outline-variant z-40">
      <div className="px-stack-md mb-margin-desktop">
      <div className="font-headline-md text-headline-md font-black text-primary uppercase mb-unit">TrailForge</div>
      <div className="font-body-md text-body-md text-on-surface-variant font-bold">Field Operations</div>
      <div className="font-body-md text-body-md text-on-surface-variant">Unit 04 - Active</div>
      </div>
      <div className="px-stack-md mb-stack-md">
      <button className="w-full bg-primary text-on-primary font-label-caps text-label-caps py-stack-sm px-stack-md uppercase transition-colors hover:bg-on-primary-fixed flex items-center justify-center gap-stack-sm border-2 border-primary" type="button" data-action-id="new-log-1" onClick={actions?.["new-log-1"]}>
      <Plus aria-hidden={true} focusable="false" />
                      New Log
                  </button>
      </div>
      <ul className="flex-1 flex flex-col gap-unit px-stack-xs">
      {/* Active Tab: Operations (Assuming context is viewing operations when error occurs) */}
      <li>
      <a className="flex items-center gap-stack-md px-stack-sm py-stack-sm bg-primary text-on-primary font-bold border-l-4 border-secondary-container" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps uppercase">Operations</span>
      </a>
      </li>
      {/* Inactive Tabs */}
      <li>
      <a className="flex items-center gap-stack-md px-stack-sm py-stack-sm text-on-surface-variant hover:bg-surface-container-highest transition-colors border-l-4 border-transparent" href="#" data-action-id="assignment-2" onClick={actions?.["assignment-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps uppercase">Assignment</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-stack-md px-stack-sm py-stack-sm text-on-surface-variant hover:bg-surface-container-highest transition-colors border-l-4 border-transparent" href="#" data-action-id="recovery-3" onClick={actions?.["recovery-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps uppercase">Recovery</span>
      </a>
      </li>
      </ul>
      <div className="mt-auto px-stack-xs border-t-2 border-outline-variant pt-stack-md mx-stack-xs">
      <ul className="flex flex-col gap-unit">
      <li>
      <a className="flex items-center gap-stack-md px-stack-sm py-stack-sm text-on-surface-variant hover:bg-surface-container-highest transition-colors border-l-4 border-transparent" href="#" data-action-id="sync-settings-4" onClick={actions?.["sync-settings-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps uppercase">Sync Settings</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-stack-md px-stack-sm py-stack-sm text-on-surface-variant hover:bg-surface-container-highest transition-colors border-l-4 border-transparent" href="#" data-action-id="system-status-5" onClick={actions?.["system-status-5"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps uppercase">System Status</span>
      </a>
      </li>
      </ul>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col md:ml-64 relative min-h-screen">
      {/* TopAppBar */}
      <header className="flex justify-between items-center w-full px-margin-desktop h-16 z-50 bg-surface border-b-2 border-outline-variant sticky top-0">
      <div className="flex items-center gap-stack-md flex-1">
      <div className="font-headline-md text-headline-md font-extrabold tracking-tighter text-primary md:hidden">TrailForge</div>
      {/* Search on left */}
      <div className="hidden md:flex items-center border-2 border-outline-variant px-stack-sm py-unit focus-within:border-primary bg-surface flex-1 max-w-md transition-colors">
      <Search className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      <input className="bg-transparent border-none focus:ring-0 font-label-caps text-label-caps w-full text-primary placeholder:text-on-surface-variant" placeholder="SEARCH OPERATIONS..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-stack-md">
      <div className="flex items-center gap-stack-sm text-on-surface-variant hidden sm:flex">
      <button className="p-unit hover:bg-surface-container-highest transition-colors flex items-center justify-center" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle className="text-error" aria-hidden={true} focusable="false" />
      </button>
      <button className="p-unit hover:bg-surface-container-highest transition-colors flex items-center justify-center" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="p-unit hover:bg-surface-container-highest transition-colors flex items-center justify-center" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      <button className="bg-surface text-primary border-2 border-primary font-label-caps text-label-caps py-unit px-stack-md uppercase transition-colors hover:bg-surface-container-highest hidden sm:block" type="button" data-action-id="create-kit-5" onClick={actions?.["create-kit-5"]}>
                          Create Kit
                      </button>
      <div className="w-8 h-8 bg-surface-container-high border-2 border-outline-variant flex items-center justify-center overflow-hidden shrink-0">
      <User className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </header>
      {/* Main Canvas: Error State */}
      <main className="flex-1 p-margin-mobile md:p-margin-desktop flex items-center justify-center bg-background">
      <div className="w-full max-w-2xl bg-surface border-2 border-outline-variant p-margin-desktop flex flex-col items-start gap-stack-md">
      {/* High Contrast Indicator */}
      <div className="w-16 h-16 bg-error-container border-2 border-error flex items-center justify-center mb-stack-sm">
      <Circle  style={{fontSize: "32px", fontVariationSettings: "'FILL' 1"}} className="text-error" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col gap-unit">
      <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">Sync Failed</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant">Connection lost. Unable to fetch remote kit registry.</p>
      </div>
      <div className="w-full h-px bg-outline-variant my-stack-sm"></div>
      <div className="bg-surface-container-low border-l-4 border-error p-stack-md w-full">
      <p className="font-body-md text-body-md text-on-surface">Check your local field hub connection or start with a manual kit creation to proceed offline.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-stack-md mt-stack-md w-full sm:w-auto items-center">
      <button className="w-full sm:w-auto bg-primary text-on-primary font-label-caps text-label-caps py-stack-sm px-margin-desktop uppercase border-2 border-primary hover:bg-on-primary-fixed transition-colors" type="button" data-action-id="retry-load-6" onClick={actions?.["retry-load-6"]}>
                              Retry Load
                          </button>
      <button className="w-full sm:w-auto bg-surface text-primary font-label-caps text-label-caps py-stack-sm px-margin-desktop uppercase border-2 border-primary hover:bg-surface-container-highest transition-colors" type="button" data-action-id="create-first-kit-7" onClick={actions?.["create-first-kit-7"]}>
                              Create First Kit
                          </button>
      </div>
      <div className="mt-stack-md w-full flex justify-center sm:justify-start">
      <a className="font-label-caps text-label-caps text-on-surface-variant uppercase underline hover:text-primary transition-colors" href="#" data-action-id="clear-all-filters-6" onClick={actions?.["clear-all-filters-6"]}>
                              Clear All Filters
                          </a>
      </div>
      </div>
      </main>
      </div>
      {/* Mobile Bottom NavBar (Synthesized for fluidity) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface border-t-2 border-outline-variant z-50 flex justify-around items-center h-16">
      <a className="flex flex-col items-center justify-center w-full h-full text-primary border-t-4 border-primary bg-surface-container-highest" href="#" data-action-id="link-7" onClick={actions?.["link-7"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </a>
      <a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant hover:bg-surface-container-highest transition-colors border-t-4 border-transparent" href="#" data-action-id="link-8" onClick={actions?.["link-8"]}>
      <Circle aria-hidden={true} focusable="false" />
      </a>
      <a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant hover:bg-surface-container-highest transition-colors border-t-4 border-transparent" href="#" data-action-id="link-9" onClick={actions?.["link-9"]}>
      <Circle aria-hidden={true} focusable="false" />
      </a>
      </nav>
    </>
  );
}
