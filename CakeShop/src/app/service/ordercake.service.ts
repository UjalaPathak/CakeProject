import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ordercake } from '../models/ordercake.model';

@Injectable({
  providedIn: 'root'
})
export class OrdercakeService {
  req:string=" https://localhost:44342/api/BuyNowtbl";
 
  constructor(private http: HttpClient) { }

  postOrder(order:Ordercake):Observable<any>
  {
    return this.http.post<any>(this.req,order,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }
}
