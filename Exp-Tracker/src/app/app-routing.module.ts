import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { SecureComponent } from './secure/secure.component';
import { RegisterComponent } from './public/register/register.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { ExpensesComponent } from './secure/expenses/expenses.component';
import { ExpensesReportComponent } from './secure/expenses-report/expenses-report.component';
import { ProfileComponent } from './secure/profile/profile.component';

const routes: Routes = [
  {
    path : '',
    component : PublicComponent,
    children : [
      { path : '', component : HomeComponent},
      { path : 'login', component : LoginComponent},
      { path : 'register', component : RegisterComponent}


    ]
  },
  { 
    path : 'secure', 
    component : SecureComponent,
    children : [
      { path : 'dashboard', component : DashboardComponent},
      { path : 'expenses', component : ExpensesComponent},
      { path : 'expenses-report', component : ExpensesReportComponent},
      { path : 'profile', component : ProfileComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
