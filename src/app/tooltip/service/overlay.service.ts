import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class OverlayService {
  private el: HTMLDivElement;
  constructor(@Inject(DOCUMENT) private _document: any) {
    const el = this._document.createElement('div');
    el.className = 'tooltip';
    this.el = el;
  }

  close() {
    this.el.hidden = true;
  }

  open(el, text, position) {

  }

  attach(target) {
    target.appendChild(this.el);
  }
  detach() {
    this.el.parentNode.removeChild(this.el);
  }
}
