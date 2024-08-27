import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input('appBetterHighlight') defaultColor: string = 'brown';

  @HostBinding('style.backgroundColor') backgroundColor;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'brown');
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }
}
