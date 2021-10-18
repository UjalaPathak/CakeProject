import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { Payment } from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  // readonly rootUrl = 'https://localhost:44361';
  req:string="https://localhost:44361/api/Paymenttbl";

  constructor(private http : HttpClient) { }

  postPayment(py:Payment):Observable<any>
  {
    return this.http.post<any>(this.req,py,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }

  // payment(user : Payment)
  // {
  //   const body: Payment = {
  //     paymentid: user.paymentid,
  //     Userid: user.Userid,
  //     Username: user.Username,
  //     CardHolderName: user.CardHolderName,
  //     CardNumber: user.CardNumber,
  //     CVV: user.CVV

  //   }
  //   return this.http.post(this.rootUrl + '/api/Paymenttbl', body);
  // }
}
