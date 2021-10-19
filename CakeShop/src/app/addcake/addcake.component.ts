import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Admincake } from '../models/admincake.model';
import { AdmincakeService } from '../service/admincake.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-addcake',
  templateUrl: './addcake.component.html',
  styleUrls: ['./addcake.component.scss']
})
export class AddcakeComponent implements OnInit {
  cake!: Admincake;
  admincake:Admincake[]=[];

  user:Admincake={
    cakeid:0,
    cakepicture:"",
    price:0,
    cakeweight:"",
    cakename:"",
    shape:""
  };

  addcake:Admincake={
    cakeid:0,
    cakepicture:"",
    cakeweight:"",
    price:0, 
    cakename:"",
    shape:"",
  };

  constructor(private cakeService: AdmincakeService, private toastr : ToastrService, private router: Router, private jwtHelper:JwtHelperService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? : NgForm)
  {
    if(form != null)
      form.resetForm();
    this.cake = {
      cakeid:0,
      cakepicture: '',
      cakeweight: '',
      price: 0,
      cakename: '',
      shape: ''
    }
  }

  post_api(ac:Admincake):void
  {
    this.cakeService.postCake(ac).subscribe(data=>
      {
        this.router.navigate(['/home']);
      });
      this.toastr.success('Record inserted succussfully', 'Cake');
  }

}
