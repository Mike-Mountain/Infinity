import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedCoreModule } from '@infinity/shared';
import { CoreModule, NavigationModule } from '@infinity/dashboard-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    NavigationModule,
    SharedCoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
