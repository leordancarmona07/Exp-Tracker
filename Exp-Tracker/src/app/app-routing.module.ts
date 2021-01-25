import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path : 'public',
    loadChildren: () => import(`./public/public.module`).then(m => m.PublicModule)
  },
  { 
    path : 'secure',
    loadChildren: () => import(`./secure/secure.module`).then(m => m.SecureModule)
  },
  { path : '', redirectTo : 'public', pathMatch : 'full'},
  { path : '**', component : PageNotFoundComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
