import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userregister } from '../models/userregister.model';
import { UserregisterService } from '../service/userregister.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user :Userregister={
    Name: '',
    Password: '',
    Username: '',
    Email: '',
    RePassword: ''
  }

  constructor(private obj : UserregisterService, private router: Router) { }

  ngOnInit(): void {
  }

  post_api(login:Userregister):void
  {
    this.obj. Login(login).subscribe(data=>
      {
        const token=data;
        localStorage.setItem("Username",login.Username);
        localStorage.setItem("jwt",token);      
        this.router.navigate(['/home']);
      })
  }
  
}
