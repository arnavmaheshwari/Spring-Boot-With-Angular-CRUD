import { GetAllCustomersComponent } from './get-all-customers/get-all-customers.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL =["http://localhost:8080"]

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }
  
  postCustomer(customer:any): Observable<any>{
      return this.http.post(BASIC_URL+"/api/customer" , customer);
  }
  
  getAllCustomer(): Observable<any>{
    return this.http.get(BASIC_URL+"/api/customers");
  }

  getCustomerById(id:number): Observable<any>{
    return this.http.get(BASIC_URL+'/api/customers/'+id);
  }
  
  updateCustomer(id:number,customer:any): Observable<any>{
    return this.http.put(BASIC_URL+'/api/customers/'+id,customer);
  }

  deleteCustomer(id:number): Observable<any>{
    return this.http.delete(BASIC_URL +"/api/customers/"+id);
  }

}
