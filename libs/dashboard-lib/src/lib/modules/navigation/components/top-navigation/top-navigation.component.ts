import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'dash-lib-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
})
export class TopNavigationComponent implements OnInit {
  public selectedProject: Observable<string> | undefined;
  public showSearch = false;
  public mockCrumbs = [
    { title: 'Infinitum', route: '/' },
    { title: 'Projects', route: '/landing' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
