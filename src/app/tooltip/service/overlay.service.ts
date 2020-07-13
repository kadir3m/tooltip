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
    console.log('text: ', text);
    this.el.innerHTML = text;
    this.el.hidden = false;
    this.el.classList;
    var rect = el.nativeElement.getBoundingClientRect();
    this.el.style.backgroundColor = '#333';
    this.el.style.backgroundColor = '#FFCC34';
    this.el.style.padding = '16px';
    this.el.style.width = 'auto';
    this.el.style.position = 'absolute';

    switch (position) {
      case 'top': {
        this.el.style.left = rect.x;
        this.el.style.top = (rect.top - 70).toString() + 'px';
        break;
      }

      case 'left': {
        this.el.style.left = (rect.x - 40).toString() + 'px';
        this.el.style.top = rect.top;
      }
      case 'right': {
        this.el.style.left = (rect.x + 100).toString() + 'px';
        this.el.style.top = rect.top;
        break;
      }

      case 'bottom': {
        this.el.style.left = rect.x;
        this.el.style.top = (rect.top + 70).toString() + 'px';
      }
    }
  }

  attach(target) {
    target.appendChild(this.el);
  }
  detach() {
    this.el.parentNode.removeChild(this.el);
  }
}
