import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { Userregister } from '../models/userregister.model';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {
  req:string="https://localhost:44366/api/Authorization/Registration";
  readonly rootUrl = 'https://localhost:44381';

  constructor(private http : HttpClient) { }

  registerUser(user : Userregister)
  {
    const body: Userregister = {
      Name: user.Name,
      Username: user.Username,
      Email: user.Email,
      Password: user.Password,
      RePassword: user.RePassword
    }
    return this.http.post(this.rootUrl + '/api/RegistrationTbl', body);
  }

  Login(login:Userregister):Observable<any>
  {
    return this.http.post(this.req,login,
      {
        headers: new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*',    
          'Accept': 'text/html, application/xhtml+xml, */*'
    }),responseType:'text'}
    )}
}
