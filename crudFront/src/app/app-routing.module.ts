import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCustomersComponent } from './post-customers/post-customers.component';
import { GetAllCustomersComponent } from './get-all-customers/get-all-customers.component';
import { UpdateCustomersComponent } from './update-customers/update-customers.component';

const routes: Routes = [
  {path:'customer',component:PostCustomersComponent},
  {path:"",component:GetAllCustomersComponent},
  // :id because variable in url
  {path:'customer/:id',component:UpdateCustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
