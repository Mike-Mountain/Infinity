import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavigationTab } from '@infinity/schemas';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  contentTabsSrc = new BehaviorSubject<NavigationTab[]>([]);
  runTabsSrc = new BehaviorSubject<NavigationTab[]>([]);

  constructor(private router: Router) {}

  getContentTabs(): Observable<NavigationTab[]> {
    return this.contentTabsSrc
      .asObservable()
      .pipe(tap((tabs) => tabs.filter((tab) => tab.type === 'contentTab')));
  }

  getRunTabs(): Observable<NavigationTab[]> {
    return this.runTabsSrc
      .asObservable()
      .pipe(tap((tabs) => tabs.filter((tab) => tab.type === 'runTab')));
  }

  addTab(tab: NavigationTab): void {
    const tabs =
      tab.type === 'runTab' ? this.runTabsSrc.value : this.contentTabsSrc.value;
    const found = tabs.find((item) => item.path === tab.path);
    if (!found) {
      tabs.push(tab);
      tab.type === 'runTab'
        ? this.runTabsSrc.next(tabs)
        : this.contentTabsSrc.next(tabs);
      this.router.navigate([tab.path]);
    }
  }

  removeTab(tab: NavigationTab): void {
    const currentTabs =
      tab.type === 'runTab' ? this.runTabsSrc.value : this.contentTabsSrc.value;
    const tabs = currentTabs.filter((item) => item.name !== tab.name);
    const redirectPath = tabs[0]?.path || '/';
    tab.type === 'runTab'
      ? this.runTabsSrc.next(tabs)
      : this.contentTabsSrc.next(tabs);
    this.router.navigate([redirectPath]);
  }
}
