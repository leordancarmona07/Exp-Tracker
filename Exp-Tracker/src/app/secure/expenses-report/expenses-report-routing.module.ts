import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesReportComponent } from './expenses-report.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ElectricityBillComponent } from './electricity-bill/electricity-bill.component';
import { FoodComponent } from './food/food.component';
import { PersonalCareComponent } from './personal-care/personal-care.component';
import { PhoneBillComponent } from './phone-bill/phone-bill.component';
import { SavingsComponent } from './savings/savings.component';
import { TransportationComponent } from './transportation/transportation.component';
import { WaterBillComponent } from './water-bill/water-bill.component';
import { ProfileComponent } from '../profile/profile.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', component: ExpensesReportComponent,
    children : [
      { path : 'clothing', component : ClothingComponent},
      { path : 'electricity-bill', component : ElectricityBillComponent},
      { path : 'food', component : FoodComponent},
      { path : 'personal-care', component : PersonalCareComponent},
      { path : 'phone-bill', component : PhoneBillComponent},
      { path : 'savings', component : SavingsComponent},
      { path : 'transportation', component : TransportationComponent},
      { path : 'water-bill', component : WaterBillComponent},
      { path : 'profile', component : ProfileComponent},
      {path: '', redirectTo: 'clothing', pathMatch: 'full'},
      { path: '**', component:  PageNotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesReportRoutingModule { }
