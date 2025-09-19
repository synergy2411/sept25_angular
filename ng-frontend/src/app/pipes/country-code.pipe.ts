import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
})
export class CountryCodePipe implements PipeTransform {
  transform(value: number, asciiCode: string = 'IND'): string {
    let code = '';
    switch (asciiCode.toUpperCase()) {
      case 'USA': {
        code = '+1';
        break;
      }
      case 'SIN': {
        code = '+65';
        break;
      }
      case 'AUS': {
        code = '+61';
        break;
      }
      default: {
        code = '+91';
        break;
      }
    }
    return code + ' ' + value;
  }
}

// Reverse the string
// "Hello".split("").reverse().join("")
