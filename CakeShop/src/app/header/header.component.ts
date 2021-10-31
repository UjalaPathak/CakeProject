import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalitem :number=0
  
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private jwtHelper:JwtHelperService,private cartService:CartService) { }

  ngOnInit(): void {

    this.cartService.getAllCake()
    .subscribe(res=>{
      this.totalitem = res.length;

    })
  }


  toggleSidebar() {
    this.toggleSidebarForMe.emit();
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
  Logout():void{
    localStorage.clear();
    this.router.navigate(['/home']);
  }

  IsAdmin():boolean
  {
    if(localStorage.getItem("Username") == "Admin")
    {
      // this.router.navigate(['/cake']);
      return true;
    }
    else
    {
      return false;
    }
  }

}
