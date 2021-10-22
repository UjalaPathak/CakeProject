import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { UserregisterService } from './service/userregister.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import { CakecategoryComponent } from './cakecategory/cakecategory.component';
import { OrdercakeComponent } from './ordercake/ordercake.component';
import { PaymentComponent } from './payment/payment.component';
import { AddcakeComponent } from './addcake/addcake.component';
import { AdminviewcakeComponent } from './adminviewcake/adminviewcake.component';
import { AdmineditcakeComponent } from './admineditcake/admineditcake.component';
import { OrderviewComponent } from './orderview/orderview.component';


export function tokenGet() {
  return localStorage.getItem("jwt");
}

const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    CakecategoryComponent,
    OrdercakeComponent,
    PaymentComponent,
    AddcakeComponent,
    AdminviewcakeComponent,
    AdmineditcakeComponent,
    OrderviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGet,
        allowedDomains: ["*"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [UserregisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
