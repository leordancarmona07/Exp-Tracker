import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesReportComponent } from './expenses-report/expenses-report.component';
import { ProfileComponent } from './profile/profile.component';
import { SecureRoutingModule } from './secure-routing.module';
import { ProfileUpdateComponent } from './profile/profile-update/profile-update.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DashboardComponent,
    ExpensesComponent,
    ExpensesReportComponent,
    ProfileComponent,
    ProfileUpdateComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class SecureModule { }
