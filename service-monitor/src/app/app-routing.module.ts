import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'overAll', pathMatch: 'full' },
  { path: 'overAll', loadChildren: () => import('./modules/over-all-health/over-all-health.module').then((m) => m.OverAllHealthModule) },
  { path: 'international', loadChildren: () => import('./modules/international/international.module').then((m) => m.InternationalModule) },
  { path: 'heritage', loadChildren: () => import('./modules/heritage/heritage.module').then((m) => m.HeritageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
