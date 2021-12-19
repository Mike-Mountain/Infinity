import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { createInitialLayout, LayoutModel } from '@infinity/schemas';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private layoutSrc = new BehaviorSubject<LayoutModel>(createInitialLayout());

  constructor() {
  }

  selectLayout(): Observable<LayoutModel> {
    return this.layoutSrc.asObservable();
  }

  getLayout(): LayoutModel {
    return this.layoutSrc.value;
  }

  toggleSideNavigation() {
    const open = this.getLayout().fileNavigation === '25%';
    this.updateLayout({
      fileNavigation: open ? '0' : '25%'
    });
  }

  toggleRunWindow() {
    const open = this.getLayout().runWindow === '37.5%';
    this.updateLayout({
      runWindow: open ? '0' : '37.5%'
    });
  }

  updateLayout(layout: Partial<LayoutModel>) {
    const newLayout = { ...this.layoutSrc.value, ...layout };
    this.layoutSrc.next(newLayout);
  }
}
