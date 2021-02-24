import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucfirst'
})
export class UcfirstPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log('UcfirstPipe recevied a value of ', value);
    let result = value.charAt(0).toUpperCase() + value.slice(1);
    console.log('UcfirstPipe transformed the value into ', result);
    return result;
  }

}
