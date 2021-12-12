import { Component, Input, OnInit } from '@angular/core';
import { SideNavItem } from '../../models/navigation.model';
import { LayoutService } from '../../../core/services/layout.service';

@Component({
  selector: 'dash-lib-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  @Input() navItems: SideNavItem[] = [];
  @Input() side: 'left' | 'right' = 'left';

  constructor(private layoutService: LayoutService) {
  }

  ngOnInit(): void {
  }

  updateContentState() {
    if (this.side === 'left') {
      this.leftContent();
    } else {
      this.rightContent();
    }
  }

  leftContent() {
    if (this.layoutService.getLayout().fileNavigation === '0') {
      this.layoutService.updateLayout({
        fileNavigation: '25%'
      });
    } else {
      this.layoutService.updateLayout({
        fileNavigation: '0'
      });
    }
  }

  rightContent() {
    if (this.layoutService.getLayout().runWindow === '0') {
      this.layoutService.updateLayout({
        runWindow: '37.5%'
      });
    } else {
      this.layoutService.updateLayout({
        runWindow: '0'
      });
    }
  }

}
