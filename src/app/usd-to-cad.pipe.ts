import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToCad',
  standalone: true
})
export class UsdToCadPipe implements PipeTransform {

  transform(value: number): string {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    let result: number = value * 1.3; 
    return formatter.format(result);
  }

}
