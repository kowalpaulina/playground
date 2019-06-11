import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsComponent } from './basics/basics.component';
import { RxjsRoutingRoutes } from './rxjs-routing';

@NgModule({
  imports: [
    CommonModule,
    RxjsRoutingRoutes
  ],
  declarations: [BasicsComponent]
})
export class RxjsModule { }
