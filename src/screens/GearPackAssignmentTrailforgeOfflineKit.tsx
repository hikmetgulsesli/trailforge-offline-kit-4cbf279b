// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gear Pack Assignment - TrailForge Offline Kit
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Check, Circle, EllipsisVertical, ListFilter, Plus, Search, Settings, TriangleAlert } from "lucide-react";


export type GearPackAssignmentTrailforgeOfflineKitActionId = "create-kit-1" | "new-log-2" | "search-records-3" | "filter-insights-4" | "button-5-5" | "button-6-6" | "button-7-7" | "execute-transfer-8" | "operations-1" | "assignment-2" | "recovery-3" | "sync-settings-4" | "system-status-5";

export interface GearPackAssignmentTrailforgeOfflineKitProps {
  actions?: Partial<Record<GearPackAssignmentTrailforgeOfflineKitActionId, () => void>>;
}

export function GearPackAssignmentTrailforgeOfflineKit({ actions }: GearPackAssignmentTrailforgeOfflineKitProps) {
  return (
    <>
      {/* TopAppBar Shared Component */}
      <header className="flex justify-between items-center w-full px-margin-desktop h-16 z-50 bg-surface dark:bg-background border-b-2 border-outline-variant dark:border-outline docked full-width top-0">
      <div className="flex items-center gap-stack-md">
      <Search className="text-primary dark:text-primary-fixed text-2xl" aria-hidden={true} focusable="false" />
      <div className="font-headline-md text-headline-md font-extrabold tracking-tighter text-primary dark:text-primary-fixed-dim">TrailForge</div>
      </div>
      <div className="flex items-center gap-stack-md">
      <button className="bg-primary text-on-primary font-label-caps text-label-caps px-4 py-2 uppercase border-2 border-primary hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors" type="button" data-action-id="create-kit-1" onClick={actions?.["create-kit-1"]}>Create Kit</button>
      <div className="flex gap-stack-sm text-on-surface-variant dark:text-outline">
      <Circle className="cursor-pointer hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors p-1" aria-hidden={true} focusable="false" />
      <Circle className="cursor-pointer hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors p-1" aria-hidden={true} focusable="false" />
      <Settings className="cursor-pointer hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors p-1" aria-hidden={true} focusable="false" />
      </div>
      <img alt="User profile" className="w-8 h-8 border-2 border-outline-variant object-cover ml-stack-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbYT4SVIKML7bCwNJF0DraGPvTy_2tIbmHkEhvhDFTJ2XXqS01yhRELzlFY1PkGdZVQIlTck8lhSFgbAbBQnxEFE2_-fY3-uZ2hbE8Ulpat3f0flBHOL4S_97M-zyzgzO8-6K65IuhIqYGm1VoT16mwEm1cbVFTRgBGH6-KlDXE05IbZJEuVY5XDzuTtbY7GtZTCCydMD0y4hx__KyPG0kl4yiBMWnyBdRcdVfjPUP_dC0gFsa4IoLBS1wyE4J44yYOFgqta9437s" />
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar Shared Component */}
      <nav className="hidden md:flex flex-col h-full py-stack-md border-r-2 border-outline-variant dark:border-outline bg-surface-container dark:bg-surface-container-low fixed left-0 top-16 w-64 z-40">
      <div className="px-stack-md mb-stack-md flex items-center gap-stack-sm">
      <img alt="TrailForge Logo" className="w-10 h-10 border-2 border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_cvfKbBD_YxparvrAO1HwswlMXtlKe-BL2OhdMdC9UmI7Q7lEhb9TPVhCaJhnAtKJghKuYZGH6CwwnKQIOx4UE7Ww6zp6ChL3L78G1YjiRvUmVgfi2W79kjHRmRgLPwShG6xAgXyGDWK3w3XsOrwNbC_ril2StDCxfvQndviotTB0_NAXGkUjbpe9fdnbz2yGf9yqrKMqO8JbLspLp7KMtONyPcmaDxroS-qTOk-0mGSswjhs7SI1zcUhWI0zYha35d2U-g0UZJI" />
      <div>
      <div className="font-headline-md text-headline-md font-black text-primary dark:text-primary-fixed-dim uppercase leading-none">Field Operations</div>
      <div className="font-label-caps text-label-caps text-on-surface-variant mt-unit">Unit 04 - Active</div>
      </div>
      </div>
      <div className="px-stack-md mb-stack-md">
      <button className="w-full bg-primary text-on-primary font-label-caps text-label-caps py-2 uppercase border-2 border-primary hover:bg-surface-container-highest transition-colors" type="button" data-action-id="new-log-2" onClick={actions?.["new-log-2"]}>New Log</button>
      </div>
      <div className="flex-1 overflow-y-auto mt-stack-md">
      <a className="flex items-center gap-stack-sm px-stack-md py-3 text-on-surface-variant dark:text-outline hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps uppercase">Operations</span>
      </a>
      <a className="flex items-center gap-stack-sm px-stack-md py-3 bg-primary text-on-primary dark:bg-primary-container dark:text-on-primary-container font-bold border-l-4 border-secondary-container transition-colors" href="#" data-action-id="assignment-2" onClick={actions?.["assignment-2"]}>
      <Circle className="fill" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps uppercase">Assignment</span>
      </a>
      <a className="flex items-center gap-stack-sm px-stack-md py-3 text-on-surface-variant dark:text-outline hover:bg-surface-container-highest dark:hover:bg-surface-container-high transition-colors" href="#" data-action-id="recovery-3" onClick={actions?.["recovery-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps uppercase">Recovery</span>
      </a>
      </div>
      <div className="mt-auto px-stack-md py-stack-md border-t-2 border-outline-variant">
      <a className="flex items-center gap-stack-sm py-2 text-on-surface-variant hover:bg-surface-container-highest transition-colors" href="#" data-action-id="sync-settings-4" onClick={actions?.["sync-settings-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps uppercase">Sync Settings</span>
      </a>
      <a className="flex items-center gap-stack-sm py-2 text-on-surface-variant hover:bg-surface-container-highest transition-colors" href="#" data-action-id="system-status-5" onClick={actions?.["system-status-5"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps uppercase">System Status</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 ml-0 md:ml-64 p-margin-mobile md:p-margin-desktop overflow-y-auto mt-16 bg-background">
      <div className="max-w-max-width mx-auto space-y-stack-md">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-outline-variant pb-stack-sm mb-stack-md">
      <div>
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Gear Pack Assignment</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-unit">Manage and distribute offline readiness kits.</p>
      </div>
      <div className="mt-stack-sm md:mt-0 flex gap-stack-sm">
      <button className="flex items-center gap-unit bg-surface-container-high border-2 border-outline-variant px-3 py-1 font-label-caps text-label-caps text-on-surface hover:bg-surface-container-highest" type="button" data-action-id="search-records-3" onClick={actions?.["search-records-3"]}>
      <Search className="text-[18px]" aria-hidden={true} focusable="false" />
                                  SEARCH RECORDS
                              </button>
      <button className="flex items-center gap-unit bg-surface-container-high border-2 border-outline-variant px-3 py-1 font-label-caps text-label-caps text-on-surface hover:bg-surface-container-highest" type="button" data-action-id="filter-insights-4" onClick={actions?.["filter-insights-4"]}>
      <ListFilter className="text-[18px]" aria-hidden={true} focusable="false" />
                                  FILTER INSIGHTS
                              </button>
      </div>
      </div>
      {/* Readiness Bar */}
      <div className="flex items-center justify-between bg-primary text-on-primary p-stack-sm border-2 border-primary">
      <div className="flex items-center gap-stack-sm font-label-caps text-label-caps">
      <Circle aria-hidden={true} focusable="false" />
                              GLOBAL KIT STATUS: SYNCED
                          </div>
      <div className="font-data-mono text-data-mono">LAST SYNC: 10 MINS AGO</div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-stack-md">
      {/* Teams & Packs List (Main Span) */}
      <div className="lg:col-span-2 bg-surface border-2 border-outline-variant flex flex-col">
      <div className="p-stack-sm border-b-2 border-outline-variant bg-surface-container-low flex justify-between items-center">
      <h2 className="font-label-caps text-label-caps text-on-surface">ACTIVE FIELD TEAMS</h2>
      <span className="font-data-mono text-data-mono text-on-surface-variant">4 TEAMS DEPLOYED</span>
      </div>
      <div className="flex-1 overflow-auto">
      {/* Team Row 1 */}
      <div className="border-b border-outline-variant p-stack-sm hover:bg-surface-container-lowest transition-colors flex items-center justify-between group">
      <div className="flex items-center gap-stack-md">
      <div className="cursor-move text-outline group-hover:text-primary">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-headline-md text-headline-md text-primary">Team Sierra</div>
      <div className="font-data-mono text-data-mono text-on-surface-variant">SECTOR 7G</div>
      </div>
      </div>
      <div className="flex items-center gap-stack-md">
      <div className="bg-primary-container text-on-primary-container px-2 py-1 font-label-caps text-label-caps flex items-center gap-unit border border-primary-container">
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
                                              5/5 PACKED
                                          </div>
      <button className="text-outline hover:text-primary" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}><EllipsisVertical aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      {/* Team Row 2 (Warning) */}
      <div className="border-b border-outline-variant p-stack-sm hover:bg-surface-container-lowest transition-colors flex items-center justify-between bg-error-container/20 group">
      <div className="flex items-center gap-stack-md">
      <div className="cursor-move text-outline group-hover:text-primary">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-headline-md text-headline-md text-primary">Echo Squad</div>
      <div className="font-data-mono text-data-mono text-on-surface-variant">NORTH RIDGE</div>
      </div>
      </div>
      <div className="flex items-center gap-stack-md">
      <div className="flex items-center gap-unit text-error font-label-caps text-label-caps border border-error px-2 py-1 bg-surface">
      <TriangleAlert className="text-[16px]" aria-hidden={true} focusable="false" />
                                              STALE - 24H
                                          </div>
      <div className="bg-surface-container text-on-surface px-2 py-1 font-label-caps text-label-caps flex items-center gap-unit border border-outline-variant">
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
                                              4/5 PACKED
                                          </div>
      <button className="text-outline hover:text-primary" type="button" data-action-id="button-6-6" onClick={actions?.["button-6-6"]}><EllipsisVertical aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      {/* Team Row 3 */}
      <div className="border-b border-outline-variant p-stack-sm hover:bg-surface-container-lowest transition-colors flex items-center justify-between group">
      <div className="flex items-center gap-stack-md">
      <div className="cursor-move text-outline group-hover:text-primary">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-headline-md text-headline-md text-primary">Alpha Unit</div>
      <div className="font-data-mono text-data-mono text-on-surface-variant">BASE CAMP</div>
      </div>
      </div>
      <div className="flex items-center gap-stack-md">
      <div className="bg-primary-container text-on-primary-container px-2 py-1 font-label-caps text-label-caps flex items-center gap-unit border border-primary-container">
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
                                              2/2 PACKED
                                          </div>
      <button className="text-outline hover:text-primary" type="button" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}><EllipsisVertical aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      </div>
      </div>
      {/* Side Panel: Activity & Quick Assign */}
      <div className="space-y-stack-md">
      {/* Quick Assign Action Area */}
      <div className="bg-surface border-2 border-outline-variant p-stack-sm">
      <h3 className="font-label-caps text-label-caps text-on-surface mb-stack-sm">QUICK REASSIGN</h3>
      <div className="space-y-stack-sm">
      <div className="flex flex-col">
      <label className="font-label-caps text-label-caps text-on-surface-variant mb-unit">SELECT PACK</label>
      <select className="border-2 border-outline-variant bg-surface p-2 font-data-mono text-data-mono focus:border-primary focus:ring-0 outline-none">
      <option>Pack #405 (Unassigned)</option>
      <option>Pack #406 (Unassigned)</option>
      <option>Pack #201 (Echo Squad)</option>
      </select>
      </div>
      <div className="flex flex-col">
      <label className="font-label-caps text-label-caps text-on-surface-variant mb-unit">TARGET TEAM</label>
      <select className="border-2 border-outline-variant bg-surface p-2 font-data-mono text-data-mono focus:border-primary focus:ring-0 outline-none">
      <option>Echo Squad</option>
      <option>Team Sierra</option>
      <option>Alpha Unit</option>
      </select>
      </div>
      <button className="w-full bg-secondary-container text-on-secondary-container font-label-caps text-label-caps py-2 border-2 border-secondary-container hover:bg-secondary hover:text-on-secondary transition-colors mt-2" type="button" data-action-id="execute-transfer-8" onClick={actions?.["execute-transfer-8"]}>
                                          EXECUTE TRANSFER
                                      </button>
      </div>
      </div>
      {/* Recent Activity Log */}
      <div className="bg-surface border-2 border-outline-variant flex flex-col h-[250px]">
      <div className="p-stack-sm border-b-2 border-outline-variant bg-surface-container-low">
      <h3 className="font-label-caps text-label-caps text-on-surface">RECENT ACTIVITY</h3>
      </div>
      <div className="flex-1 overflow-y-auto p-stack-sm space-y-stack-sm font-data-mono text-data-mono text-on-surface-variant">
      <div className="flex gap-2">
      <span className="text-primary-container"><Circle className="text-[14px]" aria-hidden={true} focusable="false" /></span>
      <span>[10:42] Pack #402 moved to Sierra.</span>
      </div>
      <div className="flex gap-2 text-error">
      <span><TriangleAlert className="text-[14px]" aria-hidden={true} focusable="false" /></span>
      <span>[09:15] Echo Squad reported Stale (24h+).</span>
      </div>
      <div className="flex gap-2">
      <span className="text-primary-container"><Plus className="text-[14px]" aria-hidden={true} focusable="false" /></span>
      <span>[08:00] Pack #405 provisioned (Base).</span>
      </div>
      <div className="flex gap-2">
      <span className="text-primary-container"><Check className="text-[14px]" aria-hidden={true} focusable="false" /></span>
      <span>[07:30] Sync completed successfully.</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
