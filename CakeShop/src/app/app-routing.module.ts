import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcakeComponent } from './addcake/addcake.component';
import { AdmineditcakeComponent } from './admineditcake/admineditcake.component';
import { AdminviewcakeComponent } from './adminviewcake/adminviewcake.component';
import { CakecategoryComponent } from './cakecategory/cakecategory.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdercakeComponent } from './ordercake/ordercake.component';
import { OrderviewComponent } from './orderview/orderview.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  { 
    path: 'cake', 
    // component: AdmincakeComponent,
    children : [
      {
        path: 'addcake', component: AddcakeComponent
      },
      {
        path: 'viewcake', component: AdminviewcakeComponent
      },
      {
        path: 'editcake/:id', component: AdmineditcakeComponent
      }
    ]
  },
  // {path: 'addcake', component: AddcakeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cakecategory/:category', component: CakecategoryComponent},
  {path: 'order/:id', component: OrdercakeComponent},
  {path: 'payment/:userid', component: PaymentComponent},
  {path: 'vieworder', component: OrderviewComponent},
  {path:'cart',component: CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
