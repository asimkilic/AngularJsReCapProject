import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { UserComponent } from './components/user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { CardetailsComponent } from './components/car/cardetails/cardetails.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import{BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CarFilterComponent } from './components/car/car-filter/car-filter.component';
import { CheckRentComponent } from './components/check-rent/check-rent.component';
import { RelatedCarsComponent } from './components/car/related-cars/related-cars.component';
import {ToastrModule} from 'ngx-toastr';
import { PaymentComponent } from './components/payment/payment.component';
import {ModalModule } from 'ngx-bootstrap/modal';




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
    FilterPipePipe,
    CarFilterComponent,
    CheckRentComponent,
    RelatedCarsComponent,
    PaymentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    ModalModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
