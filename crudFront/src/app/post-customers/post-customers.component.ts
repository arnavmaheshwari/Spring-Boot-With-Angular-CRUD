import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from './../customers.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-customers',
  templateUrl: './post-customers.component.html',
  styleUrls: ['./post-customers.component.css']
})
export class PostCustomersComponent {

  postCustomerForm!: FormGroup;


  constructor(private customerService:CustomersService,
    private fb: FormBuilder,
    private router: Router){}

    ngOnInit(){
      this.postCustomerForm = this.fb.group({
        name: [null,[Validators.required]],
        phone:[null,[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
        email:[null,[Validators.required,Validators.email]]
      })
    }

    postCustomer(){
      console.log(this.postCustomerForm.value);
      this.customerService.postCustomer(this.postCustomerForm.value).subscribe((res: any)=>{
        console.log(res);
        // After Adding, navigates to the home page, that is the get-all-customers page
        this.router.navigateByUrl("")
      })
    }
}
