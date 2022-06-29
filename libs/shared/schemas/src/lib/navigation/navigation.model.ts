export interface SideNavItem {
  name: string;
  path: string;
}

export type TabType = 'contentTab' | 'runTab';

export interface NavigationTab {
  path: string;
  type: TabType;
  name: string;
  selected?: boolean;
}

export function createTab(params?: Partial<NavigationTab>) {
  return {
    path: params?.path || '',
    type: params?.type || 'contentTab',
    name: params?.name || '',
    selected: params?.selected || false
  } as NavigationTab;
}
