import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { OverlayService } from './service/overlay.service';
@NgModule({
  imports: [CommonModule],
  declarations: [TooltipComponent, TooltipDirective],
  providers: [OverlayService],
  exports: [TooltipComponent, TooltipDirective],
})
export class TooltipModule {}
