import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { createInitialLayout, LayoutModel } from '../models/layout.model';

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

  updateLayout(layout: Partial<LayoutModel>) {
    const newLayout = { ...this.layoutSrc.value, ...layout };
    this.layoutSrc.next(newLayout);
  }
}
