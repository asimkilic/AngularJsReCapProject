import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/car/carDetail';
import { CarImage } from 'src/app/models/car/carImage';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {


  // carDetails:CarDetail[];
  carDetail:CarDetail;
  carImage:CarImage[];
  // carImages1:CarImage[];
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }
  slideConfig={"slidesToShow": 1, "slidesToScroll": 1,"autoplay":true,"autoplaySpeed":1500, "adaptiveHeight": true,"arrows":true};
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getcarDetails(params["carId"]);
      }
    })
  }


  getcarDetails(carId:number){
    this.carService.getCarDetails(carId).subscribe(response=>{
  this.carDetail=response.data;
  this.carImage=this.carDetail.carImages;


  });
  }

}
