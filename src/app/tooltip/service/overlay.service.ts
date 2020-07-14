import { Inject, Injectable, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class OverlayService {
  private el: HTMLDivElement;
  constructor() {}

  close() {
    const elements = document.getElementsByClassName('tooltipbox');
    while (elements.length > 0) {
      elements[0].remove();
    }
  }

  open() {}

  attach(target) {
    target.appendChild(this.el);
  }
  detach() {
    this.el.parentNode.removeChild(this.el);
  }
}
