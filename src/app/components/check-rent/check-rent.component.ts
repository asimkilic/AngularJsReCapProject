import { formatDate } from '@angular/common';
import { templateJitUrl } from '@angular/compiler';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';


import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';


import { Rental } from 'src/app/models/rental/rental';
import { RentWithCreditCard } from 'src/app/models/rental/rentWithCreditCard';
import { ResponseModel } from 'src/app/models/responseModel';

import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-check-rent',
  templateUrl: './check-rent.component.html',
  styleUrls: ['./check-rent.component.css']
})
export class CheckRentComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  result: boolean = false;
  rental: Rental;
  rentWithCreditCard: RentWithCreditCard;
  resultRent: string;
  resultReturn: string;
  totalPrice: number = 0;
  cardHoldersName: string;
  cardNumber: string;
  cardExpirationMonth: number;
  cardExpirationYear: number;
  cardCvcNumber: number;

  configModal = {
    keyboard: false
  }

  modalRef: BsModalRef;
  @Input() carIdChild: number;
  @Input() dailyPrice: number;
  constructor(
    private toastrService: ToastrService,
    private rentalService: RentalService,
    private modalService: BsModalService,

  ) {

    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: true,
      minDate: new Date(),
      isAnimated: true,
      dateInputFormat: 'YYYY-MM-DD,h:mm:ss a'

    });


  }


  ngOnInit(): void {

  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({ keyboard: false, ignoreBackdropClick: true }, { class: 'gray modal-lg' }));
  }
  onValueChange(dates: Date[]) {

    var dateRent = dates[0];
    console.log(dates[0])
    this.resultRent = dateRent.toISOString().split('T')[0] + 'T10:00:00';
    console.warn(this.resultRent)
    var dateReturn = dates[1];
    console.log(dates[0])

    this.resultReturn = dateReturn.toISOString().split('T')[0] + 'T10:00:00';
    console.warn(this.resultReturn)

    var MS_one_day = 1000 * 60 * 60 * 24;
    var date1 = Date.UTC(dates[0].getFullYear(), dates[0].getMonth(), dates[0].getDate());
    var date2 = Date.UTC(dates[1].getFullYear(), dates[1].getMonth(), dates[1].getDate());
    this.totalPrice = ((Math.floor((date2 - date1) / MS_one_day)) + 1) * this.dailyPrice;

  }
  sendData(template: TemplateRef<any>) {
    var rentalData: Rental = {
      carId: this.carIdChild, customerId: 1, rentDate: this.resultRent, returnDate: this.resultReturn, id: 0
    };
    this.rentalService.checkRentalCar(rentalData).subscribe((response: ResponseModel) => {

      // this.result = response.success;

      if (response.success) {
        this.toastrService.success("Araç müsait ödeme sayfasına yönlendiriliyorsunuz", "İşlem başarılı");
        this.result = true;
        this.openModal(template)
      }

    }, (error: any) => {
      this.toastrService.error("Araç o tarihlerde müsait değil", "İşlem başarısız");
      this.result = false;

    }
    )



  }


  rentPayment() {

     this.rentWithCreditCard= {

        cardHoldersName: this.cardHoldersName,
        cardNumber: this.cardNumber,
        cardExpirationMonth: Number(this.cardExpirationMonth),
        cardExpirationYear: Number(this.cardExpirationYear),
        cardCvcNumber: Number(this.cardCvcNumber),
        totalPrice: this.totalPrice,
       rental: {
        carId: this.carIdChild,
        customerId: 1,
        id: 0,
        rentDate: this.resultRent,
        returnDate: this.resultReturn
      }
    }
    console.warn(this.rentWithCreditCard);



    this.rentalService.rentWithCreditCard(this.rentWithCreditCard).subscribe(response=>{
     console.log(response.message);
        this.toastrService.success("Ödeme Başarılı", "İşlem başarılı");
        window.location.reload();


    }, err => {
      console.log(err);

      this.toastrService.error(err.error.message);


    })
  }


}
