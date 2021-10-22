import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Ordercake } from '../models/ordercake.model';
import { OrdercakeService } from '../service/ordercake.service';
import { Admincake } from '../models/admincake.model';

@Component({
  selector: 'app-ordercake',
  templateUrl: './ordercake.component.html',
  styleUrls: ['./ordercake.component.scss']
})
export class OrdercakeComponent implements OnInit {
  order!: Ordercake;
  ordercake:Ordercake[]=[];
  admincake: Admincake[]=[];


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
  constructor(private orderService: OrdercakeService, private toastr : ToastrService, private router: Router, private jwtHelper:JwtHelperService, private route: ActivatedRoute) { }



  ngOnInit() {
    this.orders.cakeid = Number(this.route.snapshot.paramMap.get('id'));
    this.resetForm();
  }

  resetForm(form? : NgForm)
  {
    if(form != null)
      form.resetForm();
    this.order = {
      orderid:0,
      cakeid: 0,
      name:"",
      address:"",
      city:"", 
      state: '',
      country:'',
      pincode:'',
      phoneno:''
    }
  }

  post_api(oc:Ordercake):void
  {
    this.orderService.postOrder(oc).subscribe(data=>
      {
        this.router.navigate(['/payment/'+this.orders.cakeid]);
        this.toastr.success('Make payment to complete your order!!!', '');
      });
  }

  IsAuthendicated():boolean{
    const token:string|null=localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token) && token!=null)
    {
      return true;
    }
    else
    {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
