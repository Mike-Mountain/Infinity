import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {
        path: ':id',
        loadChildren: () => import('@infinity/blog-lib/module/blog-lib.module').then(m => m.BlogLibModule)
      }
    ])
  ],
  providers: []
})
export class RemoteEntryModule {
}
