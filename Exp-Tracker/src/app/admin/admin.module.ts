import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AdminRoutingModule } from './admin-routing.module';
import { ViewUserComponent } from './view-user/view-user.component';
import { ViewTableComponent } from './view-table/view-table.component';


@NgModule({
  declarations: [ViewUserComponent, ViewTableComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class AdminModule { }
