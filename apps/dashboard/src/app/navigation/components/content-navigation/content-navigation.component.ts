import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'dash-content-navigation',
  templateUrl: './content-navigation.component.html',
  styleUrls: ['./content-navigation.component.scss']
})
export class ContentNavigationComponent implements OnInit {

  // activeTreeNode: string;
  // activeFiles$: Observable<ProjectNode[]>;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // this.activeFiles$ = this.fileNavigationQuery.select('activeFiles');
    // this.fileNavigationQuery.select('activeTreeNode').subscribe(activeNode => {
    //   activeNode ?
    //     this.activeTreeNode = activeNode :
    //     this.router.navigateByUrl('/');
    // });
  }

  public navigateToFile(node: any): void {
    // TODO: Open the tree when navigating the content nav
    // this.fileNavigationService.updateActiveNode(node.name);
    // if (node.isProjectRoot) {
    //   this.fileNavigationService.setSelectedProject(node);
    // } else {
    //   this.fileNavigationService.setSelectedFile(node);
    // }
    // this.router.navigateByUrl(`/projects/${node.path}`);
  }

  public closeTab(file: any, event: MouseEvent) {
    // this.fileNavigationService.removeSelectedFile(file);
    // event.stopPropagation();
  }
}
