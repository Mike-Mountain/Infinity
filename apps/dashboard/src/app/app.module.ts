import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule, NavigationModule } from '@infinity/dashboard-lib';
import { SharedCoreModule } from '@infinity/feature';
import { InitService } from './services/init.service';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { environment } from '@infinity/config';

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
    },
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: { baseUrl: environment.apiUrl }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
