import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admincake } from '../models/admincake.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmincakeService {
  readonly rootUrl = 'https://localhost:44363';
  req:string="https://localhost:44363/api/AdminCakeTbl";

  constructor(private http: HttpClient) { }

  getAllCake():Observable<Admincake[]>
  {
    return this.http.get<Admincake[]>(this.req,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  postCake(cake:Admincake):Observable<any>
  {
    return this.http.post<any>(this.req,cake,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }

  getCakeById(id:number):Observable<Admincake>
  {
    return this.http.get<Admincake>(this.req+"/"+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  putCake(admincake:Admincake,id:number):Observable<any>
  {
    return this.http.put<Admincake>(this.req+"?id="+id,admincake,{
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        }
      )
    })
  }

  deleteCake(id:number):Observable<any>
  {
   return this.http.delete<any>(this.req+"?id="+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }



  

  // registerCake(cake : Admincake)
  // {
  //   const body: Admincake = {
  //     cakepicture: cake.cakepicture,
  //     cakeweight: cake.cakeweight,
  //     price: cake.price,
  //     cakename: cake.cakename,
  //     shape: cake.shape
  //   }
  //   return this.http.post(this.rootUrl + '/api/AdminCakeTbl', body);
  // }
}
