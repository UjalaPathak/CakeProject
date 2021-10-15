import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admincake } from '../models/admincake.model';

@Injectable({
  providedIn: 'root'
})
export class AdmincakeService {
  readonly rootUrl = 'https://localhost:44363';

  constructor(private http: HttpClient) { }

  registerCake(cake : Admincake)
  {
    const body: Admincake = {
      cakepicture: cake.cakepicture,
      cakeweight: cake.cakeweight,
      price: cake.price,
      cakename: cake.cakename,
      shape: cake.shape
    }
    return this.http.post(this.rootUrl + '/api/AdminCakeTbl', body);
  }
}
