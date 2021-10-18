import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Admincake } from '../models/admincake.model';
import { AdmincakeService } from '../service/admincake.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cakecategory:Admincake[]=[];
  gridColumns = 4;
  constructor(private cakeService: AdmincakeService, private toastr : ToastrService, private router: Router, private jwtHelper:JwtHelperService) { }

  ngOnInit(): void {
  }

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  get_api():void{
    this.cakeService.getAllCake().subscribe(data=>
      {
        this.cakecategory=data;
        console.log(this.cakecategory);
      }
    );
  }
}
