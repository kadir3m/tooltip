import { Component, OnInit } from '@angular/core';
import { OverlayService } from './service/overlay.service';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  constructor(public overlayService: OverlayService) {}

  ngOnInit() {}
}
