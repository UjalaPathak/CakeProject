import { Component, OnInit } from '@angular/core';
import { Ordercake } from '../models/ordercake.model';
import { OrdercakeService } from '../service/ordercake.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orderview',
  templateUrl: './orderview.component.html',
  styleUrls: ['./orderview.component.scss']
})
export class OrderviewComponent implements OnInit {
  order!: Ordercake;
  ordercake:Ordercake[]=[];

  user:Ordercake={
    orderid:0,
    cakeid:0,
    name:"",
    address:"",
    city:"", 
    state:"",
    country:"",
    pincode:"",
    phoneno:""
  };

orders:Ordercake={
  orderid:0,
  cakeid:0,
  name:"",
  address:"",
  city:"",  
  state:"",
  country:"",
  pincode:"",
  phoneno:""
};

  constructor(private orderService: OrdercakeService, private toastr : ToastrService, private router: Router, private jwtHelper:JwtHelperService) { }

  ngOnInit(): void {
    this.orderService.getAllOrder().subscribe(data=>
      {
        this.ordercake=data;
        console.log(this.ordercake);
      }
    );
  }

  delete_api(id:number):void
  {
    this.orderService.deleteOrders(id).subscribe(data=>
      {
        this.router.navigate(['/home']);
        this.toastr.success('Record deleted succussfully');
      });
  }

}
