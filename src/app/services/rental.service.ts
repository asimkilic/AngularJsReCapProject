import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental/rental';
import { RentalDetail } from '../models/rental/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44347/api/";

  constructor(private httpClient: HttpClient) { }

  getRentals(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + "rentals/getall";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  getRentalsDetail(): Observable<ListResponseModel<RentalDetail>> {
    let newPath = this.apiUrl + "rentals/getrentaldetails";
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }
}
