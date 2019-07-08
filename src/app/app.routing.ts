import { NavComponent } from "./nav/nav.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsComponent } from "./forms/forms.component";
import { RxjsComponent } from "./rxjs/rxjs/rxjs.component";

const routes: Routes = [
  //
  // { path: "", component: NavComponent },
  // { path: 'rxjs', redirectTo: '/rxjs', pathMatch: 'full' },
  { path: "rxjs", component: RxjsComponent },
  { path: "forms", component: FormsComponent },
  { path: "**", redirectTo: "/rxjs" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
