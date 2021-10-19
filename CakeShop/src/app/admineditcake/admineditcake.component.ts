import { Component, OnInit } from '@angular/core';
import { Admincake } from '../models/admincake.model';
import { AdmincakeService } from '../service/admincake.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admineditcake',
  templateUrl: './admineditcake.component.html',
  styleUrls: ['./admineditcake.component.scss']
})
export class AdmineditcakeComponent implements OnInit {
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
  id: number = 0;
  constructor(private cakeService: AdmincakeService, private toastr : ToastrService, private router: Router, private jwtHelper:JwtHelperService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id  = Number(this.route.snapshot.paramMap.get('id'));
    this.cakeService.getCakeById(this.id).subscribe(data =>
      {
        this.user = data;
      });
    
  }

  put_api(ac:Admincake,id:number):void
  {
    this.cakeService.putCake(ac,id).subscribe(data=>{
        this.router.navigate(['/cake/viewcake']);
        this.toastr.success('Record updated succussfully');
      });
  }

}
