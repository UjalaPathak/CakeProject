import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Userregister } from '../models/userregister.model';
import { UserregisterService } from '../service/userregister.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user!: Userregister;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private userService: UserregisterService) { }

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
    form.reset();
  }
}
