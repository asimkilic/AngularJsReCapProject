import { CarFeature } from "./carFeature";
import { CarImage } from "./carImage";

export interface CarDetail {
  carId: number;
  carName: string;
  colorName: string;
  brandName: string;
  dailyPrice: number;
  modelYear: number;
  description: string;
  carImages: CarImage[];
  segmentClass: string;
  segmentId: number;
  carFeature: CarFeature;
}
