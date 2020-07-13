import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { OverlayService } from './service/overlay.service';
import { JsonPipe } from '@angular/common';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective {
  @Input('appTooltip') values: any;

  constructor(private el: ElementRef, private overlay: OverlayService) {
    this.overlay.attach(el.nativeElement);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    // console.log('val=>' + JSON.stringify(this.values.text));
    this.overlay.open(this.el, this.values.text, this.values.position);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.overlay.close();
  }
}
