import { Pipe, PipeTransform } from '@angular/core';
import { ButtonType } from '../models/dash-button.model';

@Pipe({
  name: 'buttonClass'
})
export class ButtonClassPipe implements PipeTransform {

  transform(type: ButtonType): string {
    switch (type) {
      case 'basic':
        return 'mat-button';
      case 'icon':
        return 'mat-icon-button';
    }
  }

}
