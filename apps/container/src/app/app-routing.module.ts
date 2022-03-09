import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '@infinity/container-lib';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  {
    path: 'blog',
    loadChildren: () => import('blog/Module').then((m) => m.RemoteEntryModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
