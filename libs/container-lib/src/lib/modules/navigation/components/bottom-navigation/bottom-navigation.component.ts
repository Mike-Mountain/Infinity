import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@infinity/layout';

@Component({
  selector: 'ctr-lib-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss'],
})
export class BottomNavigationComponent {
  constructor(private layoutService: LayoutService) {}

  updateBottomContent() {
    if (this.layoutService.getLayout().bottomContent === '0') {
      this.layoutService.updateLayout({
        bottomContent: '3fr',
      });
    } else {
      this.layoutService.updateLayout({
        bottomContent: '0',
      });
    }
  }
}
