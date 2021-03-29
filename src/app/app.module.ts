import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { UserComponent } from './components/user/user.component';
import {HttpClient, HttpClientModule}from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { CardetailsComponent } from './components/car/cardetails/cardetails.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    CarComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    UserComponent,
    MenuComponent,
    CardetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
