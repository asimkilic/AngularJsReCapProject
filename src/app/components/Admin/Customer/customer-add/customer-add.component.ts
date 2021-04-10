import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
customerAddForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private customerService:CustomerService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createCustomerForm();
  }

  createCustomerForm(){
    this.customerAddForm=this.formBuilder.group({
      userId:["",Validators.required],
      companyName:["",Validators.required]
    })

  }
  add(){
    if(this.customerAddForm.valid){
      let customerModal=Object.assign({},this.customerAddForm.value);
      this.customerService.add(customerModal).subscribe(response=>{
        this.toastrService.success(response.message,"Success");
        this.customerAddForm.reset();
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
           this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Invalid Form");

          }
        }
      })
    }
    else{
      this.toastrService.error("Invalid Form Values","Error");

    }
  }
}
