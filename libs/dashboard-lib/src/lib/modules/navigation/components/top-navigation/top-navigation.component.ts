import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'dash-lib-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  public selectedProject: Observable<string> | undefined;
  public showSearch = false;
  public mockCrumbs = [
    {title: 'Infinitum', route: '/'},
    {title: 'Projects', route: '/'},
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.selectedProject = this.layoutQuery.select(state => state.activeProject);
  }

  public navigateToProject(project: string) {
    // const selectedFile: InfTreeNode = {
    //   path: project,
    //   isProjectRoot: true,
    //   id: '1',
    //   name: 'Run Application',
    //   icon: '',
    //   children: []
    // }
    // this.fileNavigationService.setSelectedFile(selectedFile);
    // this.fileNavigationService.setSelectedProject(selectedFile);
    // this.fileNavigationService.addActiveFiles(selectedFile);
    // this.router.navigateByUrl(`/projects/${project}`);
  }
}
