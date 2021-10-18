import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Ordercake } from '../models/ordercake.model';
import { OrdercakeService } from '../service/ordercake.service';

@Component({
  selector: 'app-ordercake',
  templateUrl: './ordercake.component.html',
  styleUrls: ['./ordercake.component.scss']
})
export class OrdercakeComponent implements OnInit {
  order!: Ordercake;
  ordercake:Ordercake[]=[];

  user:Ordercake={
    orderid:0,
  cakeid:0,
  Name:"",
  Address:"",
  City:"", 
  State:"",
  Country:"",
  Pincode:"",
  Phoneno:""
  };

orders:Ordercake={
  orderid:0,
  cakeid:0,
  Name:"",
  Address:"",
  City:"", 
  State:"",
  Country:"",
  Pincode:"",
  Phoneno:""
};

  constructor(private orderService: OrdercakeService, private toastr : ToastrService, private router: Router, private jwtHelper:JwtHelperService) { }



  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm)
  {
    if(form != null)
      form.resetForm();
    this.order = {
      orderid:0,
      cakeid: 0,
      Name: '',
      Address: '',
      City: '',
      State: '',
      Country:'',
      Pincode:'',
      Phoneno:''
    }
  }

  post_api(oc:Ordercake):void
  {
    this.orderService.postOrder(oc).subscribe(data=>
      {
        this.router.navigate(['/payment']);
      });
      this.toastr.success('Record inserted succussfully', 'Cake table');
  }

}
