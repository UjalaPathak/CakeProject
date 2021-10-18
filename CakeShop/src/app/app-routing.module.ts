import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmincakeComponent } from './admincake/admincake.component';
import { CakecategoryComponent } from './cakecategory/cakecategory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdercakeComponent } from './ordercake/ordercake.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cake', component: AdmincakeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cakecategory/:category', component: CakecategoryComponent},
  {path: 'order', component: OrdercakeComponent},
  {path: 'payment', component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
