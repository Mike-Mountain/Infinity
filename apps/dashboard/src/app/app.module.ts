import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule, NavigationModule } from '@infinity/dashboard-lib';
import { SharedCoreModule } from '@infinity/feature';
import { InitService } from './services/init.service';

function initFunction(initService: InitService) {
  return () => initService.initializeApplication();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedCoreModule,
    CoreModule,
    NavigationModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initFunction,
      deps: [InitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
