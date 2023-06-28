import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternationalComponent } from './components/international/international.component';

const routes: Routes = [
  { path: '', component: InternationalComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternationalRoutingModule { }
