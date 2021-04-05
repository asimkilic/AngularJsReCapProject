import { CreditCart } from "./creditCard";
import { Rental } from "./rental";

export interface RentWithCreditCard
{
  rental:Rental;
  cardHoldersName:string;
  cardNumber:string;
  cardExpirationMonth:number;
  cardExpirationYear:number;
  cardCvcNumber:number;
  totalPrice:number;

}
