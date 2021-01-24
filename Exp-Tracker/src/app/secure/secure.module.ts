import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesReportComponent } from './expenses-report/expenses-report.component';
import { ProfileComponent } from './profile/profile.component';
import { SecureRoutingModule } from './secure-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ExpensesComponent,
    ExpensesReportComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class SecureModule { }
