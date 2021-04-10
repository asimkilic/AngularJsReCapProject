import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private colorService:ColorService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.createColorUpdateForm(params["colorId"]);
      }
    })
  }
  createColorUpdateForm(id:number){
    this.colorUpdateForm=this.formBuilder.group({
      id:["",Validators.required],
      name:["",Validators.required]
    })
    this.colorService.getColorById(id).subscribe(response=>{
      this.colorUpdateForm.patchValue({
        id:response.data.id,
        name:response.data.name
      })
    })
  }
update(){
  if(this.colorUpdateForm.valid){
    let colorModal=Object.assign({},this.colorUpdateForm.value);
    this.colorService.update(colorModal).subscribe(response=>{
      this.toastrService.success(response.message,"Success");
      window.location.reload();
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
