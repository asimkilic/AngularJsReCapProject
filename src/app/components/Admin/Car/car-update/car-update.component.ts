import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  carUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.createCarUpdateForm(params["carId"]);
      }
    })
  }
  createCarUpdateForm(id: number) {
    this.carUpdateForm = this.formBuilder.group({
      id: ["", Validators.required],
      brandId: ["", Validators.required],
      colorId: ["", Validators.required],
      segmentId: ["", Validators.required],
      carFeaturesId: ["", Validators.required],
      carName: ["", Validators.required],
      modelYear: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      description: ["", Validators.required]

    });
    this.carService.getCarById(id).subscribe(response=>{
      this.carUpdateForm.patchValue({
        id:response.data.id,
        brandId:response.data.brandId,
        colorId:response.data.colorId,
        segmentId:response.data.segmentId,
        carFeaturesId:response.data.carFeaturesId,
        carName:response.data.carName,
        modelYear:response.data.modelYear,
        dailyPrice:response.data.dailyPrice,
        description:response.data.description
      })
    },responseError=>{
      if (responseError.error.Errors.length > 0) {
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Invalid Value");

        }
      }
    } )
  }
  update(){
    if(this.carUpdateForm.valid){
      let carModal=Object.assign({},this.carUpdateForm.value);
      this.carService.update(carModal).subscribe(response=>{
        this.toastrService.success(response.message,"Success");
        window.location.reload();

      },responseError=>{
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Invalid Value");

          }
        }
      });

  }
  else{
    this.toastrService.error("Invalid form Values","Error");
  }
  }

}
