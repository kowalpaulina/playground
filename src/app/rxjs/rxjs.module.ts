import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsComponent } from './basics/basics.component';
import { RxjsRoutingModule } from './rxjs-routing';
import { RxjsComponent } from './rxjs/rxjs.component';
import { OperatorsComponent } from './operators/operators.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  imports: [
    CommonModule,
    RxjsRoutingModule
  ],
  declarations: [BasicsComponent, RxjsComponent, OperatorsComponent, BooksComponent]
})
export class RxjsModule { }
