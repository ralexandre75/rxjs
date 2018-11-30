import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './pagenotfound.component';
import { HomeComponent } from './home.component';
import { FromComponent } from './operateurs/from/from.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'from', component: FromComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
