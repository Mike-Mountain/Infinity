import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LayoutModel } from '@infinity/schemas';
import { LayoutService } from '@infinity/layout';

@Directive({
  selector: '[dashLibLayout]'
})
export class LayoutDirective implements OnInit {

  private readonly element: HTMLElement;

  constructor(private el: ElementRef,
              private renderer: Renderer2,
              private layoutService: LayoutService) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    this.layoutService.selectLayout().subscribe(layout => {
      this.setLayout(layout);
    });
  }

  private setLayout(layout: LayoutModel) {
    this.setColumns(layout.fileNavigation, layout.runWindow);
    this.setRows(layout.bottomContent);
  }

  private setColumns(fileNav: string, runWindow: string) {
    this.renderer.setStyle(
      this.element,
      'grid-template-columns',
      `1.5rem ${fileNav} 2fr ${runWindow} 1.5rem`
    );
  }

  private setRows(bottomContent: string) {
    this.renderer.setStyle(
      this.element,
      'grid-template-rows',
      `2rem 3fr ${bottomContent} 1.5rem 1.5rem`
    );
  }

}
