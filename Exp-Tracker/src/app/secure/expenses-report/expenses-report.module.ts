import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FoodComponent } from './food/food.component';
import { SavingsComponent } from './savings/savings.component';
import { WaterBillComponent } from './water-bill/water-bill.component';
import { ElectricityBillComponent } from './electricity-bill/electricity-bill.component';
import { PhoneBillComponent } from './phone-bill/phone-bill.component';
import { ClothingComponent } from './clothing/clothing.component';
import { PersonalCareComponent } from './personal-care/personal-care.component';
import { TransportationComponent } from './transportation/transportation.component';
import { ExpensesReportRoutingModule } from './expenses-report-routing.module';




@NgModule({
  declarations: [
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
    ExpensesReportRoutingModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class ExpensesReportModule { }
