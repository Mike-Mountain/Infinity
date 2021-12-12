export interface SideNavItem {
  name: string;
  path: string;
}

export type TabType = 'contentTab' | 'runTab';

export interface NavigationTab {
  path: string;
  type: TabType;
  name: string;
}
