import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ButtonColor, ButtonType } from '../models/dash-button.model';

@Directive({
  selector: '[featureButton]',
})
export class ButtonDirective implements OnInit {
  @Input() public color: ButtonColor = 'primary';
  @Input() public buttonType: ButtonType = 'basic';
  @Input() public disabled = false;
  @Input() public size: 'sm' | 'xl' | undefined;
  @Input() public class = '';

  private readonly element: HTMLButtonElement | HTMLAnchorElement;
  private classList: string[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.element = this.el.nativeElement;
  }

  ngOnInit(): void {
    this.classList = [
      `dash-${this.buttonType}-button`,
      `button-${this.color}`,
      `button-${this.size}`,
    ];
    this.setBaseStyles();
  }

  private setBaseStyles() {
    this.classList.forEach((item) =>
      this.renderer.addClass(this.element, item)
    );
  }
}
