import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationTab, TabType } from '../../models/navigation.model';
import { NavigationService } from '../../services/navigation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'dash-lib-content-navigation',
  templateUrl: './content-navigation.component.html',
  styleUrls: ['./content-navigation.component.scss']
})
export class ContentNavigationComponent implements OnInit {

  @Input() type: TabType | undefined;
  tabs$: Observable<NavigationTab[]> | undefined;

  constructor(private router: Router,
              private navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.tabs$ = (this.type && this.type === 'runTab') ?
      this.navigationService.getRunTabs() :
      this.navigationService.getContentTabs();
  }

  closeTab(tab: NavigationTab, event: MouseEvent) {
    this.navigationService.removeTab(tab);
    event.stopImmediatePropagation();
    event.preventDefault();
  }
}
