import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/Admin/Brand/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/Admin/Brand/brand-update/brand-update.component';
import { CarUpdateComponent } from './components/Admin/Car/car-update/car-update.component';
import { CarrAddComponent } from './components/Admin/Car/carr-add/carr-add.component';
import { ColorAddComponent } from './components/Admin/Color/color-add/color-add.component';
import { ColorUpdateComponent } from './components/Admin/Color/color-update/color-update.component';
import { CustomerAddComponent } from './components/Admin/Customer/customer-add/customer-add.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { CardetailsComponent } from './components/car/cardetails/cardetails.component';
import { CheckRentComponent } from './components/check-rent/check-rent.component';
import { ColorComponent } from './components/color/color.component';
import { PaymentComponent } from './components/payment/payment.component';



const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"bookcar",component:CheckRentComponent},
  {path:"cars/brands/:brandId",component:CarComponent},
  {path:"cars/colors/:colorId",component:CarComponent},
  {path:"cars/filteredCars/color/:colorfilterId/brand/:brandfilterId",component:CarComponent},
  {path:"cars/cardetails/:carId",component:CardetailsComponent},
  {path:"brands",component:BrandComponent},
  {path:"colors",component:ColorComponent},
  {path:"payment",component:PaymentComponent},
  {path:"admin/addBrand",component:BrandAddComponent},
  {path:"admin/addColor",component:ColorAddComponent},
  {path:"admin/addCustomer",component:CustomerAddComponent},
  {path:"admin/addCar",component:CarrAddComponent},
  {path:"admin/updateBrand/:brandId",component:BrandUpdateComponent},
  {path:"admin/updateColor/:colorId",component:ColorUpdateComponent},
  {path:"admin/updateCar/:carId",component:CarUpdateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
