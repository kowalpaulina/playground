import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsComponent } from './basics/basics.component';
import { RxjsRoutingModule } from './rxjs-routing';
import { RxjsComponent } from './rxjs/rxjs.component';
import { OperatorsComponent } from './operators/operators.component';

@NgModule({
  imports: [
    CommonModule,
    RxjsRoutingModule
  ],
  declarations: [BasicsComponent, RxjsComponent, OperatorsComponent]
})
export class RxjsModule { }
