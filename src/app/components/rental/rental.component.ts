import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental/rental';
import { RentalDetail } from 'src/app/models/rental/rentalDetail';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals:Rental[]=[];
  rentalsDetails:RentalDetail[]=[];

  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalsDetails();
  }

  getRentals(){
    this.rentalService
    .getRentals()
    .subscribe(response=>{this.rentals=response.data});
  }
  getRentalsDetails(){
    this.rentalService
    .getRentalsDetail()
    .subscribe(response=>{this.rentalsDetails=response.data});
  }

}
