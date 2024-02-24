import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../customers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-customers',
  templateUrl: './update-customers.component.html',
  styleUrls: ['./update-customers.component.css']
})
export class UpdateCustomersComponent {

  updateCustomerForm!: FormGroup;

  // To get ID from URL
  id:number=this.activatedRoute.snapshot.params['id']

  constructor(private activatedRoute: ActivatedRoute,
    private  service: CustomersService,
    private fb:  FormBuilder,
    private router: Router) {  
  }

  ngOnInit(){
    this.updateCustomerForm = this.fb.group({
      name: [null,[Validators.required]],
      phone: [null,Validators.required],
      email: [null,[Validators.required,Validators.email]]
    })
    this.getCustomerByID();
  }

  getCustomerByID(){
    this.service.getCustomerById(this.id).subscribe((data)=>{
      console.log("Data Received...", data);
      // patchValue puts the value in the form after retrieving from the DataBase
      this.updateCustomerForm.patchValue(data);
    })
  }

  updateCustomer(){
    this.service.updateCustomer(this.id,this.updateCustomerForm.value).subscribe((data)=>{
      console.log(data);
      if(data.id!=null){
        this.router.navigateByUrl("");
      }
    })
  }
}
