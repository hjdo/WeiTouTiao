import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the JsonDisplayPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'jsonDisplay',
})
export class JsonDisplayPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value,args:string[]):any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}
