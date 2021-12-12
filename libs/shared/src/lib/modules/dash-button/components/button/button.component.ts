import { Component, Input, OnInit } from '@angular/core';
import { ButtonColor, ButtonRole, ButtonType } from '../../models/dash-button.model';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() public color: ButtonColor = 'primary';
  @Input() public type: ButtonType = 'basic';
  @Input() public role: ButtonRole = 'button';
  @Input() public disabled = false;
  @Input() public class?: string;
  @Input() public style: {key: string, value: string} | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
