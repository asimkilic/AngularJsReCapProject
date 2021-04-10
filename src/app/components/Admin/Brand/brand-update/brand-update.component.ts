import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { BrandService } from 'src/app/services/brand.service';


@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {
  brandUpdateForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
      this.createBrandUpdateForm(params["brandId"]);



      }
    })
  }

  createBrandUpdateForm(brandId:number) {
    this.brandUpdateForm = this.formBuilder.group({
      id: ["", Validators.required],
      name: ["", Validators.required]
    })
    this.brandService.getBrandById(brandId).subscribe(response => {
      this.brandUpdateForm.patchValue({
        id:response.data.id,
        name:response.data.name
      })
    })



  }
  update(){
    if(this.brandUpdateForm.valid){
      let brandModal=Object.assign({},this.brandUpdateForm.value);
      this.brandService.update(brandModal).subscribe(response=>{
        this.toastrService.success(response.message,"Success");

      },responseError=>{
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Invalid name");

          }
        }
      });

  }
  else{
    this.toastrService.error("Invalid form Values","Error");
  }
  }


}
