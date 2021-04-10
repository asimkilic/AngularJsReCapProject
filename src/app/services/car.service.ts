import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car/car';
import { CarDetail } from '../models/car/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {


  private apiUrl="https://localhost:5001/api/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarById(id:number):Observable<SingleResponseModel<Car>>{
let newPath=this.apiUrl+"cars/getbyid?id="+id;
return this.httpClient.get<SingleResponseModel<Car>>(newPath);
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
  getCarsWithByColorIdAndBrandId(colorfilterId:number,brandfilterId:number):Observable<ListResponseModel<CarDetail>>
  {
    let newPath=this.apiUrl+"cars/getcarswithbycoloridandbrandid?"+"colorId="+colorfilterId+"&"+"brandId="+brandfilterId;

    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getRelatedCarsBySegmentSegmentId(segmentId:number){
    let newPath=this.apiUrl+"cars/getrelatedcarsbysegmentid?segmentId="+segmentId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  add(car:Car):Observable<ResponseModel>
  {
   let newPath=this.apiUrl+"cars/add";
   return this.httpClient.post<ResponseModel>(newPath,car);
  }
  update(car:Car):Observable<ResponseModel>
  {
    let newPath=this.apiUrl+"cars/update";
    return this.httpClient.post<ResponseModel>(newPath,car);
  }

}
