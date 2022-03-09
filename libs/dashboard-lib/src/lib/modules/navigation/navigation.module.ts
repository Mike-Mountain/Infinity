import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';
import { ContentNavigationComponent } from './components/content-navigation/content-navigation.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { RouterModule } from '@angular/router';
import { DashButtonModule } from '@infinity/feature';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    BottomNavigationComponent,
    ContentNavigationComponent,
    SideNavigationComponent,
    TopNavigationComponent,
  ],
  imports: [
    CommonModule,
    DashButtonModule,
    RouterModule,
    MatIconModule,
    MatInputModule,
  ],
  exports: [
    BottomNavigationComponent,
    ContentNavigationComponent,
    SideNavigationComponent,
    TopNavigationComponent,
  ],
})
export class NavigationModule {}
