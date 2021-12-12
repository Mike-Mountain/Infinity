import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavigationTab } from '../models/navigation.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  contentTabsSrc = new BehaviorSubject<NavigationTab[]>([
    { name: 'test', path: '/test', type: 'contentTab' },
    { name: 'test2', path: '/test2', type: 'contentTab' }
  ]);
  runTabsSrc = new BehaviorSubject<NavigationTab[]>([]);

  constructor() {
  }

  getContentTabs(): Observable<NavigationTab[]> {
    return this.contentTabsSrc.asObservable().pipe(
      tap(tabs => tabs.filter(tab => tab.type === 'contentTab'))
    );
  }

  getRunTabs(): Observable<NavigationTab[]> {
    return this.runTabsSrc.asObservable().pipe(
      tap(tabs => tabs.filter(tab => tab.type === 'runTab'))
    );
  }

  addTab(tab: NavigationTab): void {
    const tabs = tab.type === 'runTab' ? this.runTabsSrc.value : this.contentTabsSrc.value;
    tabs.push(tab);
    tab.type === 'runTab' ?
      this.runTabsSrc.next(tabs) :
      this.contentTabsSrc.next(tabs);
  }

  removeTab(tab: NavigationTab): void {
    const currentTabs = tab.type === 'runTab' ? this.runTabsSrc.value : this.contentTabsSrc.value;
    const tabs = currentTabs.filter(item => item.name !== tab.name);
    tab.type === 'runTab' ?
      this.runTabsSrc.next(tabs) :
      this.contentTabsSrc.next(tabs);
  }
}
