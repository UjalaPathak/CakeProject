import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admincake } from '../models/admincake.model';
import { AdmincakeService } from '../service/admincake.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cakecategory',
  templateUrl: './cakecategory.component.html',
  styleUrls: ['./cakecategory.component.scss']
})
export class CakecategoryComponent implements OnInit {
  cakecategory:Admincake[]=[];
  cake!: Admincake;
  gridColumns = 4;

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
  category : string | null = "";

  constructor(private cakeService: AdmincakeService, private router: Router, private jwtHelper:JwtHelperService, private route: ActivatedRoute , private cartservice: CartService) { }
 
  ngOnInit(): void {
    this.cakeService.getAllCake().subscribe(data=>
      {
        this.cakecategory=data;
        this.cakecategory.forEach((a:any)=>{
          Object.assign(a,{Quantity:1,total:a.price})

        })
        console.log(this.cakecategory);
      }
    );
  }
 
  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  IsAuthendicated():boolean{
    const token:string|null=localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token) && token!=null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  IsCategory(cake:string):boolean
  {
    this.category=this.route.snapshot.paramMap.get('category');
    if(cake== this.category)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  addtocart(item: any){
    this. cartservice.addtoCart(item);
  }
  

  

}
