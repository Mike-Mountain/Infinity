import { Injectable } from '@angular/core';
import { NavigationEnd, Router, UrlSerializer } from '@angular/router';
import { LayoutService } from '@infinity/layout';
import { NavigationService } from '@infinity/navigation';
import { createTab, NavigationTab } from '@infinity/schemas';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor(private router: Router,
              private urlSerializer: UrlSerializer,
              private layoutService: LayoutService,
              private navigationService: NavigationService) {
  }

  public initializeApplication() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Create an empty tab for the current route
        const tab: NavigationTab = createTab({});
        // const url = this.urlSerializer.parse(event.urlAfterRedirects);
        const url = event.urlAfterRedirects;
        tab.name = url.split('/')[1];
        tab.path = url;
        // Add the new tab to the tab array
        if (tab.name) {
          this.navigationService.addTab(tab);
        }
      }
    });
  }
}
