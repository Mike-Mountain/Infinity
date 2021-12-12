import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '@infinity/dashboard-lib';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: '', pathMatch: 'full', redirectTo: '/landing'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
