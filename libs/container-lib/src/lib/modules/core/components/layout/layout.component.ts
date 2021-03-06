import { Component, OnInit } from '@angular/core';
import { SideNavItem } from '@infinity/schemas';

@Component({
  selector: 'ctr-lib-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public leftNavItems: SideNavItem[] = [];
  public rightNavItems: SideNavItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.leftNavItems = [
      { name: 'Projects', path: 'projects' },
      { name: 'Blog', path: 'blog' },
    ];
    this.rightNavItems = [{ name: 'Run', path: 'run' }];
  }
}
