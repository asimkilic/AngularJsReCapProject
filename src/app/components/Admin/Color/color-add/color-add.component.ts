import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {
  colorAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private colorService: ColorService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.createColorForm();
  }
  createColorForm() {
    this.colorAddForm = this.formBuilder.group({
      name: ["", Validators.required]
    })
  }
  add() {
    if (this.colorAddForm.valid) {
      let colorModal = Object.assign({}, this.colorAddForm.value);
      this.colorService.add(colorModal).subscribe(response => {
        this.toastrService.success(response.message, "Success");
        this.colorAddForm.reset();
      }, responseError => {
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Invalid Name");

          }
        }
      });
    }
    else{
      this.toastrService.error("Invalid Form Values","Error");
    }
  }
}
