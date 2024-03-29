import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'got', loadChildren: () => import('./got/got.module').then(m => m.GotModule) }, 
  { path: 'countries', loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
