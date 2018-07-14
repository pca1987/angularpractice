import { Input, Inject, Directive, ElementRef, HostListener, Renderer } from "../../node_modules/@angular/core";
import { DOCUMENT } from "../../node_modules/@angular/platform-browser";

@Directive({
    selector: '[scrollPoint]'
   })
   export class ScrollPointDirective {
      @Input() scrollPoint: number;
      constructor(
       @Inject(DOCUMENT) private document: Document,
       private renderer: Renderer,
       private el: ElementRef
    ) { }
   
      @HostListener('window:scroll', [])
      onWindowScroll() {
         const windowScroll = window.scrollY;
         if (windowScroll > this.scrollPoint) {
           this.renderer.setElementClass(this.el.nativeElement, 'sticky-element', true);
         } else {
           this.renderer.setElementClass(this.el.nativeElement, 'sticky-element', false);
         }
      }
    }