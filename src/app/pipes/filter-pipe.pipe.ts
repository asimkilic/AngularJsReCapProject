import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/car/carDetail';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDetail[], filterText:string): CarDetail[] {
   filterText=filterText?filterText.toLocaleLowerCase():"";

   return filterText?value
   .filter((c:CarDetail)=>(`${c.carName} ${c.brandName} ${c.colorName}`)
   .toLocaleLowerCase()
   .indexOf(filterText)!==-1)
   :value;
  }

}
