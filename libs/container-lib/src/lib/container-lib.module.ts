import { NgModule } from '@angular/core';
import { CoreModule } from './modules/core/core.module';
import { NavigationModule } from './modules/navigation/navigation.module';

@NgModule({
  imports: [CoreModule, NavigationModule],
  exports: [CoreModule, NavigationModule],
})
export class ContainerLibModule {}
