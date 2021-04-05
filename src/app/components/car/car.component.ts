import { createDirectiveTypeParams } from '@angular/compiler/src/render3/view/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car/car';
import { CarDetail } from 'src/app/models/car/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[];
  carsDetail: CarDetail[];
  carsFiltered:CarDetail[];
  filterText="";
  dataLoaded=false;
  constructor(private carService: CarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {


     this.activatedRoute.params.subscribe(params=>{


      if(params["brandId"]){
         this.getCarsDetailsByBrandId(params["brandId"]);
       }
       else if(params["colorId"]){
        this.getCarsDetailsByColorId(params["colorId"]);
       }
       else if(params["colorfilterId"] && params["brandfilterId"])
       {
        this.getCarsWithByColorIdAndBrandId(params["colorfilterId"],params["brandfilterId"]);
       }

       else{
         this.getCarsDetail();
       }
     })

  }
  getCars() {

    this.carService
      .getCars()
      .subscribe(response => { this.cars = response.data })
  };

  getCarsDetail() {
    this.carService
      .getCarsDetail()
      .subscribe(response => { this.carsDetail = response.data })
      this.dataLoaded=true;
  };

  getCarsByBrandId(brandId:number){

    this.carService.getCarsByBrandId(brandId).subscribe(response=>{this.cars=response.data});
  }
  getCarsByColorId(colorId:number){

    this.carService.getCarsByColorId(colorId).subscribe(response=>{this.cars=response.data});
  }
  getCarsDetailsByBrandId(brandId:number){
    this.carService.getCarsDetailsByBrandId(brandId).subscribe(response=>{this.carsDetail=response.data});
  }
  getCarsDetailsByColorId(colorId:number){
    this.carService.getCarsDetailsByColorId(colorId).subscribe(response=>{this.carsDetail=response.data});
  }
  getCarsWithByColorIdAndBrandId(colorfilterId:number,brandfilterId:number)
  {
    this.carService.getCarsWithByColorIdAndBrandId(colorfilterId,brandfilterId).subscribe(response=>{this.carsDetail=response.data});
  }

}
