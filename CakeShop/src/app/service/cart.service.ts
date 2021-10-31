import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CakecategoryComponent } from '../cakecategory/cakecategory.component';
import { Admincake } from '../models/admincake.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  // pass a value or it can also act as subscriber
  public AdminCake = new BehaviorSubject<any>([]);
  //public search = new BehaviorSubject<string>("");

  constructor() { }
  getAllCake(){
    return this.AdminCake.asObservable();
  }

  setCakes(Admincake : any){
    this.cartItemList.push(...Admincake);
    this.AdminCake.next(Admincake);
  }
  addtoCart(Admincake : any){
    this.cartItemList.push(Admincake);
    this.AdminCake.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(Admincake: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(Admincake.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.AdminCake.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.AdminCake.next(this.cartItemList);
  }

}
