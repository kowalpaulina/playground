import { BasicsComponent } from './basics/basics.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OperatorsComponent } from './operators/operators.component';

const routes: Routes = [
  { path: 'rxjs', component: RxjsComponent, children: [
    { path: '', component: BasicsComponent },
    { path: 'basics', component: BasicsComponent },
    { path: 'operators', component: OperatorsComponent },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RxjsRoutingModule { }
