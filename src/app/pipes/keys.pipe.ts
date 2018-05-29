import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform( value: any ): any {
    const keys = [];
    for ( const key of value ) {
      keys.push(key);
    }

    return keys;
  }

}
