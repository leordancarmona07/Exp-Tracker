import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesReportComponent } from './expenses-report/expenses-report.component';
import { ProfileComponent } from './profile/profile.component';
import { FoodComponent } from './expenses-report/food/food.component';
import { SavingsComponent } from './expenses-report/savings/savings.component';
import { WaterBillComponent } from './expenses-report/water-bill/water-bill.component';
import { ElectricityBillComponent } from './expenses-report/electricity-bill/electricity-bill.component';
import { PhoneBillComponent } from './expenses-report/phone-bill/phone-bill.component';
import { ClothingComponent } from './expenses-report/clothing/clothing.component';
import { PersonalCareComponent } from './expenses-report/personal-care/personal-care.component';
import { TransportationComponent } from './expenses-report/transportation/transportation.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    DashboardComponent,
    ExpensesComponent,
    ExpensesReportComponent,
    ProfileComponent,
    FoodComponent,
    SavingsComponent,
    WaterBillComponent,
    ElectricityBillComponent,
    PhoneBillComponent,
    ClothingComponent,
    PersonalCareComponent,
    TransportationComponent

  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class SecureModule { }
