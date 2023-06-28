import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeritageComponent } from './components/heritage/heritage.component';

const routes: Routes = [
  { path: '', component: HeritageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeritageRoutingModule { }
