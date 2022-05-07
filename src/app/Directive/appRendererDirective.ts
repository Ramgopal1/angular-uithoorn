import { Renderer2, OnInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRendererDirective]',
})
export class AppRendererDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'green'
    );
  }
}
