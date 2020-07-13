import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { OverlayService } from './service/overlay.service';
import { JsonPipe } from '@angular/common';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective {
  @Input('appTooltip') values: any;
  tooltip: HTMLElement;
  offset = 18;
  constructor(private el: ElementRef, private overlay: OverlayService,private renderer:Renderer2) {
    this.overlay.attach(el.nativeElement);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.create();
    this.setPosition();
    this.renderer.addClass(this.tooltip,'tooltipbox')
  }

  @HostListener('mouseleave')
  onMouseLeave() {
   this.hide()
  }

  hide(){
    // this.renderer.setStyle(this.tooltip,'display','none')
    this.tooltip.hidden=true;
  }

  create() {
    this.tooltip = this.renderer.createElement('span');

    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.values.text) // textNode
    );

    this.renderer.appendChild(document.body, this.tooltip);
    this.renderer.addClass(this.tooltip,`tooltipbox-${this.values.position}`)
    // this.renderer.appendChild(this.el.nativeElement, this.tooltip);

  }
  
  setPosition() {
    const hostPos = this.el.nativeElement.getBoundingClientRect();

    const tooltipPos = this.tooltip.getBoundingClientRect();
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let top, left;

    if (this.values.position === 'top') {
      top = hostPos.top - tooltipPos.height - this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.values.position === 'bottom') {
      top = hostPos.bottom + this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }

    if (this.values.position === 'left') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.left - tooltipPos.width - this.offset;
    }

    if (this.values.position === 'right') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.right + this.offset;
    }

    this.renderer.setStyle(this.tooltip, 'top', `${top + scrollPos}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
  }
}
