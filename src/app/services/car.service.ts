import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car/car';
import { CarDetail } from '../models/car/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {


  private apiUrl="https://localhost:44347/api/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsDetail():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarsdetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetails(carId:number):Observable<SingleResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcardetailsbyid?id="+carId;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }
  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarsbybrandid?id="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarsbycolorid?id="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsDetailsByBrandId(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarsdetailsbybrandid?id="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsDetailsByColorId(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcarsdetailsbycolorid?id="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

}
