import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Admincake } from '../models/admincake.model';
import { AdmincakeService } from '../service/admincake.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { fakeAsync } from '@angular/core/testing';


@Component({
  selector: 'app-admincake',
  templateUrl: './admincake.component.html',
  styleUrls: ['./admincake.component.scss']
})
export class AdmincakeComponent implements OnInit {
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

  msg:string="";
  flag:boolean=false;
  flagpost:boolean=true;
  flagupdate:boolean=false;
  addcakes:boolean = false;
  viewcake:boolean = true;

  constructor(private cakeService: AdmincakeService, private toastr : ToastrService, private router: Router, private jwtHelper:JwtHelperService) { }

  ngOnInit() {
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

  // OnSubmit(form : NgForm)
  // {
  //   this.cakeService.registerCake(form.value)
  //     .subscribe((data:any) => {
  //       if(data.Succeeded == true)
  //         this.resetForm(form);
  //   });
  //   this.toastr.success('Record inserted succussfully', 'Cake table');
  //   form.reset();
  // }

  get_api():void{
    this.flag = true;
    this.flagpost = false;
    this.viewcake = false;
    this.addcakes = true;
    this.cakeService.getAllCake().subscribe(data=>
      {
        this.admincake=data;
        console.log(this.admincake);
      }
    );
  }

  post_api(ac:Admincake):void
  {
    this.flag = false;
    this.cakeService.postCake(ac).subscribe(data=>
      {
        this.router.navigate(['/home']);
      });
      this.toastr.success('Record inserted succussfully', 'Cake table');
  }

  get_apibyId(id:number):void{
    this.flag=false;
    this.flagupdate = true;
    this.addcakes = false;
    this.cakeService.getCakeById(id).subscribe(data=>
      {
        this.user=data;
        console.log(this.user);
      });
  }
  
  put_api(ac:Admincake,id:number):void
  {
    this.cakeService.putCake(ac,id).subscribe(data=>{
        this.msg="Updated";
        this.router.navigate(['/']);
      });
    console.log(this.msg);
  }

  delete_api(id:number):void
  {
    this.cakeService.deleteCake(id).subscribe(data=>
      {
        this.msg="Deleted";
        this.router.navigate(['/']);
      });
      this.toastr.success('Record deleted succussfully');
      // alert("Are you sure you want to delete this record");
  }

 

  getbutton():void{
    this.flag=true;
  }
  postbutton():void{
    this.flagpost=true;
    this.flag = false;
    this.viewcake = true;
    this.addcakes = false;
  }
  updatebutton(id:number):void{
    this.flagupdate=true;
  }
}
