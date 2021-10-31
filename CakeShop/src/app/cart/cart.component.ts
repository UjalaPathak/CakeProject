import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public totalitem :number=0
  public Admincakes : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getAllCake()
    .subscribe(res=>{

      this.Admincakes = res;
      
      this.grandTotal = this.cartService.getTotalPrice();
    })

    this.cartService.getAllCake()
    .subscribe(data=>{
      

       this.totalitem= data.length;
       console.log(data);
      
      
  })
}
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}
