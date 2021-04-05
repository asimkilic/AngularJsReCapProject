import { Component, Input, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/car/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-related-cars',
  templateUrl: './related-cars.component.html',
  styleUrls: ['./related-cars.component.css']
})
export class RelatedCarsComponent implements OnInit {

  @Input() segmentIdChild:number;
  relatedCars:CarDetail[];
  constructor(
    private carService:CarService
  ) { }

  ngOnInit(): void {
    this.getRelatedCarsBySegmentSegmentId();

  }



  getRelatedCarsBySegmentSegmentId()
  {
    this.carService.getRelatedCarsBySegmentSegmentId(this.segmentIdChild).subscribe(response=>{this.relatedCars=response.data});

  }
  reflesh(){
    window.scroll(0,0);

  }

}
