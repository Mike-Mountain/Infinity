import { Component, Input } from '@angular/core';
import { SideNavItem } from '@infinity/schemas';
import { LayoutService } from '@infinity/layout';

@Component({
  selector: 'ctr-lib-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent {
  @Input() navItems: SideNavItem[] = [];
  @Input() side: 'left' | 'right' = 'left';

  constructor(private layoutService: LayoutService) {}

  updateContentState() {
    if (this.side === 'left') {
      this.layoutService.toggleSideNavigation();
    } else {
      this.layoutService.toggleRunWindow();
    }
  }
}
