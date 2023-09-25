import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumber'
})
export class CardNumberPipe implements PipeTransform {
  transform(value: string, interceptor: string): string {
    // Check if the input has at least 16 digits
    if (value.length < 16) {
      return value;
    }
    // Format the credit card number with dashes
    const formatedCardNum = value.slice(0, 4) + ' – ' + value.slice(4, 8) + ' – ' + value.slice(8, 12) + ' – ' + value.slice(12, 16);
    return formatedCardNum;
  }
ذذ
}
