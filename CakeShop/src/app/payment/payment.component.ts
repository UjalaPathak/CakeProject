import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Payment } from '../models/payment.model';
import { PaymentService } from '../service/payment.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  pay!: Payment;
  payment:Payment[]=[];

  users:Payment={
    paymentid:0,
    Userid:0,
    Username:"",
    CardHolderName:"",
    CardNumber:"",
    CVV:""
  };

addpay:Payment={
  paymentid:0,
  Userid:0,
  Username:"",
  CardHolderName:"",
  CardNumber:"",
  CVV:""
};

  constructor(private paymentService: PaymentService, private toastr : ToastrService, private router: Router, private jwtHelper:JwtHelperService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.addpay.Userid = Number(this.route.snapshot.paramMap.get('userid'));
    this.resetForm();
  }

  resetForm(form? : NgForm)
  {
    if(form != null)
      form.resetForm();
    this.users = {
      paymentid: 0,
      Userid: 0,
      Username: '',
      CardHolderName: '',
      CardNumber: '',
      CVV: ''
    }
  }

  post_api(oc:Payment):void
  {
    this.paymentService.postPayment(oc).subscribe(data=>
      {
        this.router.navigate(['/home']);
        // this.toastr.success('', 'Payment done');
      });
      this.router.navigate(['/home']);
      this.toastr.success('', 'Payment done');
  }
}
