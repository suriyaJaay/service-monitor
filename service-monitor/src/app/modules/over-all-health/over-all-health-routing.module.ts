import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverAllHealthComponent } from './components/over-all-health/over-all-health.component';

const routes: Routes = [
  { path: '', component: OverAllHealthComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverAllHealthRoutingModule {}
