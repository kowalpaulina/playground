import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/app-basics', pathMatch: 'full' },
];

export const RxjsRoutingRoutes = RouterModule.forChild(routes);
