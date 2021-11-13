import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './components/button/button.component';
import { ButtonClassPipe } from './pipes/button-class.pipe';
import { ButtonDirective } from './directives/button.directive';


@NgModule({
  declarations: [
    ButtonComponent,
    ButtonClassPipe,
    ButtonDirective
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ButtonComponent,
    ButtonDirective
  ]
})
export class DashButtonModule {
}
