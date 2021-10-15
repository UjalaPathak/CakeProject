import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { Userregister } from '../models/userregister.model';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {
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
}
