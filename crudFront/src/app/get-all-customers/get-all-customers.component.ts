import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent {

  customers:any=[];

  constructor(private activatedRoute: ActivatedRoute,private customerService: CustomersService){}

  ngOnInit(){
    this.getAllCustomers();
  }

  getAllCustomers(){
    // Calls the service and sends request to back end
    this.customerService.getAllCustomer().subscribe((res)=>{
      console.log(res);
      this.customers = res;
    })
  }



  deleteCustomer(id:number){
    this.customerService.deleteCustomer(id).subscribe(()=>{
      this.getAllCustomers();
    })
  }
}