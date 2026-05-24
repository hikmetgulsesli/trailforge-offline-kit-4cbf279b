// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Kit Editor - TrailForge Offline Kit
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, Check, Circle, Plus, Save, Settings } from "lucide-react";


export type KitEditorTrailforgeOfflineKitActionId = "button-1-1" | "button-2-2" | "button-3-3" | "button-4-4" | "new-log-5" | "cancel-6" | "save-kit-7" | "operations-1" | "assignment-2" | "recovery-3" | "sync-settings-4" | "system-status-5";

export interface KitEditorTrailforgeOfflineKitProps {
  actions?: Partial<Record<KitEditorTrailforgeOfflineKitActionId, () => void>>;
}

export function KitEditorTrailforgeOfflineKit({ actions }: KitEditorTrailforgeOfflineKitProps) {
  return (
    <>
      {/* TopAppBar (Visible on Desktop for standard navigation, though usually hidden in transactional/task-focused flows. Keeping here as requested "navigation preserved" but modified for editor context) */}
      <header className="flex justify-between items-center px-margin-desktop h-16 z-50 bg-surface dark:bg-background border-b-2 border-outline-variant dark:border-outline fixed top-0 left-0 lg:left-64 right-0 lg:w-[calc(100%-16rem)]">
      <div className="flex items-center gap-4">
      {/* Back button for mobile/compact view */}
      <button className="lg:hidden text-primary hover:bg-surface-container-highest transition-colors p-2 rounded" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <ArrowLeft aria-hidden={true} focusable="false" />
      </button>
      <h1 className="font-headline-md text-headline-md font-extrabold tracking-tighter text-primary dark:text-primary-fixed-dim">TrailForge</h1>
      </div>
      <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 px-3 py-1 bg-surface-container border border-outline-variant text-on-surface-variant font-label-caps text-label-caps rounded-sm">
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
                      Draft - Unsaved changes
                  </div>
      <button className="text-on-surface-variant dark:text-outline hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors p-2 rounded" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant dark:text-outline hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors p-2 rounded" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant dark:text-outline hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors p-2 rounded" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* SideNavBar (Desktop Only) */}
      <nav className="hidden lg:flex flex-col h-full py-stack-md border-r-2 border-outline-variant dark:border-outline bg-surface-container dark:bg-surface-container-low fixed left-0 top-0 w-64 z-40">
      <div className="px-6 pb-6 border-b-2 border-outline-variant mb-4">
      <h2 className="font-headline-md text-headline-md font-black text-primary dark:text-primary-fixed-dim uppercase">Field Operations</h2>
      <p className="font-data-mono text-data-mono text-on-surface-variant mt-1">Unit 04 - Active</p>
      </div>
      <div className="flex-1 overflow-y-auto px-4 space-y-2">
      {/* Active state mapping to "Operations" as this is an editor likely nested under it, though strictly a transactional page might hide this. Given "navigation preserved", applying active to the parent section. */}
      <a className="flex items-center gap-3 px-4 py-3 bg-primary text-on-primary dark:bg-primary-container dark:text-on-primary-container font-bold border-l-4 border-secondary-container hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Operations</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors border-l-4 border-transparent" href="#" data-action-id="assignment-2" onClick={actions?.["assignment-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Assignment</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-outline hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors border-l-4 border-transparent" href="#" data-action-id="recovery-3" onClick={actions?.["recovery-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Recovery</span>
      </a>
      </div>
      <div className="px-4 pt-4 border-t-2 border-outline-variant mt-auto space-y-2">
      <a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-colors" href="#" data-action-id="sync-settings-4" onClick={actions?.["sync-settings-4"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Sync Settings</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-colors" href="#" data-action-id="system-status-5" onClick={actions?.["system-status-5"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">System Status</span>
      </a>
      <div className="mt-4 px-2">
      <button className="w-full bg-surface-container-highest text-on-surface font-label-caps text-label-caps py-3 border-2 border-outline hover:bg-outline transition-colors uppercase font-bold flex items-center justify-center gap-2" type="button" data-action-id="new-log-5" onClick={actions?.["new-log-5"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                          New Log
                      </button>
      </div>
      </div>
      </nav>
      {/* Main Canvas */}
      <main className="flex-1 w-full lg:ml-64 mt-16 overflow-y-auto bg-surface-container-lowest p-margin-mobile lg:p-margin-desktop">
      <div className="max-w-3xl mx-auto">
      {/* Header Area */}
      <div className="mb-8 pb-4 border-b-2 border-outline flex justify-between items-end">
      <div>
      <h2 className="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary uppercase">Kit Editor</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">Configure offline assets and requirements for field deployment.</p>
      </div>
      </div>
      {/* Form Form */}
      <form className="space-y-8 bg-surface p-6 border-2 border-outline-variant shadow-sm relative">
      {/* Grid Layout for Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-stack-md">
      {/* Kit Name (Required, Error State) */}
      <div className="col-span-1 md:col-span-2 space-y-2">
      <label className="block font-label-caps text-label-caps text-on-surface uppercase tracking-wider flex items-center gap-1" htmlFor="kit-name">
                                  Kit Name
                                  <span className="text-error">*</span>
      </label>
      <div className="relative">
      <input aria-describedby="kit-name-error" aria-invalid="true" className="w-full bg-surface-container-lowest border-2 border-error text-on-surface font-body-md text-body-md px-4 py-3 focus:outline-none focus:border-error focus:ring-0" id="kit-name" name="kit-name" placeholder="e.g., Alpha Sector Sweeper" type="text" />
      <Circle className="absolute right-3 top-3 text-error" aria-hidden={true} focusable="false" />
      </div>
      <p className="font-label-caps text-label-caps text-error" id="kit-name-error">Kit Name is required.</p>
      </div>
      {/* Route ID */}
      <div className="col-span-1 space-y-2">
      <label className="block font-label-caps text-label-caps text-on-surface uppercase tracking-wider" htmlFor="route-id">Route ID</label>
      <input className="w-full bg-surface-container-lowest border-2 border-outline-variant text-on-surface font-data-mono text-data-mono px-4 py-3 focus:outline-none focus:border-primary focus:ring-0" id="route-id" name="route-id" placeholder="RT-XXXX-00" type="text" />
      <p className="font-label-caps text-label-caps text-on-surface-variant text-[10px]">Must be alphanumeric.</p>
      </div>
      {/* Assigned Field Team */}
      <div className="col-span-1 space-y-2">
      <label className="block font-label-caps text-label-caps text-on-surface uppercase tracking-wider" htmlFor="field-team">Assigned Field Team</label>
      <div className="relative">
      <select className="w-full bg-surface-container-lowest border-2 border-outline-variant text-on-surface font-body-md text-body-md px-4 py-3 appearance-none focus:outline-none focus:border-primary focus:ring-0" id="field-team" name="field-team">
      <option disabled={true} selected={true} value="">Select a unit...</option>
      <option value="unit-01">Unit 01 - Alpha</option>
      <option value="unit-02">Unit 02 - Bravo</option>
      <option value="unit-03">Unit 03 - Charlie</option>
      </select>
      <Circle className="absolute right-3 top-3 text-outline pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      <hr className="border-t-2 border-outline-variant border-dashed" />
      {/* Safety Equipment Checklist */}
      <div className="space-y-4">
      <label className="block font-label-caps text-label-caps text-on-surface uppercase tracking-wider">Safety Equipment Checklist</label>
      <div className="bg-surface-container-low border-2 border-outline-variant p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative flex items-center justify-center">
      <input className="w-5 h-5 border-2 border-outline appearance-none bg-surface-container-lowest checked:bg-primary checked:border-primary transition-colors cursor-pointer group-hover:border-primary" type="checkbox" />
      <Check style={{fontVariationSettings: "'FILL' 1"}} className="text-[16px] text-on-primary absolute pointer-events-none opacity-0 peer-checked:opacity-100" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Emergency Beacon</span>
      </label>
      <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative flex items-center justify-center">
      <input defaultChecked={true} className="w-5 h-5 border-2 border-outline appearance-none bg-surface-container-lowest checked:bg-primary checked:border-primary transition-colors cursor-pointer group-hover:border-primary" type="checkbox" />
      <Check style={{fontVariationSettings: "'FILL' 1"}} className="text-[16px] text-on-primary absolute pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">First Aid Kit (Level 2)</span>
      </label>
      <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative flex items-center justify-center">
      <input className="w-5 h-5 border-2 border-outline appearance-none bg-surface-container-lowest checked:bg-primary checked:border-primary transition-colors cursor-pointer group-hover:border-primary" type="checkbox" />
      <Check style={{fontVariationSettings: "'FILL' 1"}} className="text-[16px] text-on-primary absolute pointer-events-none opacity-0 peer-checked:opacity-100" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Flare Gun</span>
      </label>
      <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative flex items-center justify-center">
      <input className="w-5 h-5 border-2 border-outline appearance-none bg-surface-container-lowest checked:bg-primary checked:border-primary transition-colors cursor-pointer group-hover:border-primary" type="checkbox" />
      <Check style={{fontVariationSettings: "'FILL' 1"}} className="text-[16px] text-on-primary absolute pointer-events-none opacity-0 peer-checked:opacity-100" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Thermal Blanket</span>
      </label>
      </div>
      </div>
      {/* Offline Cache Mode */}
      <div className="flex items-center justify-between p-4 border-2 border-outline-variant bg-surface-container-lowest">
      <div>
      <span className="block font-label-caps text-label-caps text-on-surface uppercase tracking-wider mb-1">Offline Cache Mode</span>
      <span className="font-body-md text-body-md text-on-surface-variant text-sm">Force pre-download of all high-res route tiles.</span>
      </div>
      {/* Rugged Toggle */}
      <label className="relative inline-flex items-center cursor-pointer">
      <input className="sr-only peer" type="checkbox" defaultValue="" />
      <div className="w-14 h-7 bg-surface-container-highest border-2 border-outline peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 rounded-none peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-outline after:border after:h-[20px] after:w-[24px] after:transition-all peer-checked:bg-primary peer-checked:after:bg-on-primary peer-checked:border-primary"></div>
      </label>
      </div>
      {/* Form Actions */}
      <div className="pt-6 border-t-2 border-outline flex flex-col sm:flex-row justify-end gap-4 mt-8">
      <button className="px-6 py-3 border-2 border-outline text-on-surface font-label-caps text-label-caps uppercase font-bold hover:bg-surface-container-highest transition-colors order-2 sm:order-1" type="button" data-action-id="cancel-6" onClick={actions?.["cancel-6"]}>
                              Cancel
                          </button>
      <button className="px-8 py-3 bg-primary text-on-primary font-label-caps text-label-caps uppercase font-bold border-2 border-primary hover:bg-primary-container hover:text-on-primary-container transition-colors order-1 sm:order-2 flex items-center justify-center gap-2" type="submit" data-action-id="save-kit-7" onClick={actions?.["save-kit-7"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                              Save Kit
                          </button>
      </div>
      </form>
      </div>
      </main>
      
    </>
  );
}
