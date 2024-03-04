import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDateFormat'
})
export class CustomDateFormatPipe implements PipeTransform {
  transform(value: any): any {
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(value, 'dd MMM');
    if (formattedDate) {
      return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }
    return '';
  }
}
