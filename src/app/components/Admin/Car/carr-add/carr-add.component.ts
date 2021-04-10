import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-carr-add',
  templateUrl: './carr-add.component.html',
  styleUrls: ['./carr-add.component.css']
})
export class CarrAddComponent implements OnInit {
  carAddForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createCarForm();
  }
  createCarForm(){
    this.carAddForm=this.formBuilder.group({

      brandId:["",Validators.required],
      colorId:["",Validators.required],
      segmentId:["",Validators.required],
      carFeaturesId:["",Validators.required],
      carName:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]
    })
  }
  add(){
    if(this.carAddForm.valid){
      let carModal=Object.assign({},this.carAddForm.value);
      this.carService.add(carModal).subscribe(response=>{
        this.toastrService.success(response.message,"Success");
        this.carAddForm.reset();
      },responseError=>{
        if(responseError.error.Errors.length>0)
        {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Invalid Form");

          }
        }
      })
    }
    else{
      this.toastrService.error("Invalid Form Values","Error")
    }
  }

}
