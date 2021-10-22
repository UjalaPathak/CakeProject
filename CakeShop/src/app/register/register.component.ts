import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Userregister } from '../models/userregister.model';
import { UserregisterService } from '../service/userregister.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user!: Userregister;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private userService: UserregisterService, private router: Router, private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm)
  {
    if(form != null)
      form.resetForm();
    this.user = {
      Name: '',
      Username: '',
      Email: '',
      Password: '',
      RePassword: ''
    }
  }

  OnSubmit(form : NgForm)
  {
    this.userService.registerUser(form.value)
      .subscribe((data:any) => {
        if(data.Succeeded == true)
          this.resetForm(form);          
    });
    this.router.navigate(['/login']);
    form.reset();
    this.toastr.success('Registered Successfully', 'User Register');
  }
}
