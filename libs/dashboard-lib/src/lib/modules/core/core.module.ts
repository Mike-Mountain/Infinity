import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { LandingComponent } from './components/landing/landing.component';
import { RouterModule } from '@angular/router';
import { LayoutDirective } from './directives/layout/layout.directive';
import { NavigationModule } from '../navigation/navigation.module';


@NgModule({
  declarations: [
    LayoutComponent,
    LandingComponent,
    LayoutDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule
  ],
  exports: [LayoutComponent]
})
export class CoreModule {
}
