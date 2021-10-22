import { Component, OnInit } from '@angular/core';
import { Admincake } from '../models/admincake.model';
import { AdmincakeService } from '../service/admincake.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminviewcake',
  templateUrl: './adminviewcake.component.html',
  styleUrls: ['./adminviewcake.component.scss']
})
export class AdminviewcakeComponent implements OnInit {
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
    this.cakeService.getAllCake().subscribe(data=>
      {
        this.admincake=data;
        console.log(this.admincake);
      }
    );
  }


  get_apibyId(id:number):void{
    this.cakeService.getCakeById(id).subscribe(data=>
      {
        this.router.navigate(['/cake/editcake']);
        this.user=data;
        console.log(this.user);
      });
  }

  delete_api(id:number):void
  {
    this.cakeService.deleteCake(id).subscribe(data=>
      {
        this.router.navigate(['/cake/addcake']);
        this.toastr.success('Record deleted succussfully');
      });
  }

}
