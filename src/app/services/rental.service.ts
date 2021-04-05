import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental/rental';

import { RentalDetail } from '../models/rental/rentalDetail';
import { RentWithCreditCard } from '../models/rental/rentWithCreditCard';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:5001/api/";

  constructor(private httpClient: HttpClient) { }

  getRentals(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + "rentals/getall";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  getRentalsDetail(): Observable<ListResponseModel<RentalDetail>> {
    let newPath = this.apiUrl + "rentals/getrentaldetails";
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }
  checkRentalCar(rental:Rental):Observable<ResponseModel>{

    let newPath=this.apiUrl+"rentals/checkcarrentbycarid";

   return this.httpClient.post<ResponseModel>(newPath,rental,{
     headers: new HttpHeaders({
       'Content-Type':'application/json'
     })
   })
  }
  rentWithCreditCard(rentWithCreditCard:RentWithCreditCard):Observable<ResponseModel>{
    let newPath=this.apiUrl+"rentals/payment";
    return this.httpClient.post<ResponseModel>(newPath,rentWithCreditCard,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
}
