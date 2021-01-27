import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ViewTableComponent } from './view-table/view-table.component';

const routes: Routes = [
  {
    path : '', component : AdminComponent,
    children : [
      { path : 'viewTable', component : ViewTableComponent},
      { path : 'viewUser', component : ViewUserComponent},
      {path: '', redirectTo: 'viewTable', pathMatch: 'full'},
      { path: '**', component:  PageNotFoundComponent}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
