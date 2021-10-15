import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admincake } from '../models/admincake.model';
import { AdmincakeService } from '../service/admincake.service';

@Component({
  selector: 'app-admincake',
  templateUrl: './admincake.component.html',
  styleUrls: ['./admincake.component.scss']
})
export class AdmincakeComponent implements OnInit {
  cake!: Admincake;
  constructor(private cakeService: AdmincakeService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm)
  {
    if(form != null)
      form.resetForm();
    this.cake = {
      cakepicture: '',
      cakeweight: '',
      price: 0,
      cakename: '',
      shape: ''
    }
  }

  OnSubmit(form : NgForm)
  {
    this.cakeService.registerCake(form.value)
      .subscribe((data:any) => {
        if(data.Succeeded == true)
          this.resetForm(form);
    });
    form.reset();
  }
}
