import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipModule } from './tooltip/tooltip.module';
import { TooltipBoxComponent } from './tooltip-box/tooltip-box.component';

@NgModule({
  declarations: [AppComponent, TooltipBoxComponent,TooltipBoxComponent],
  imports: [BrowserModule, AppRoutingModule, TooltipModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
