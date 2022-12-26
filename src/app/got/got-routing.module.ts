import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GotComponent } from './got.component';

const routes: Routes = [{ path: '', component: GotComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GotRoutingModule { }
