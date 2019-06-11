import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BasicsComponent } from './rxjs/basics/basics.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '',   redirectTo: '/rxjs', pathMatch: 'full' },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
