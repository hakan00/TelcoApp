import { Pipe, PipeTransform } from '@angular/core';

import { Services } from '../models/services';

@Pipe({
   name: 'filterService',
})
export class FilterServicePipe implements PipeTransform {
   transform(value: Services[], name: string): Services[] {
      return (
         value.length ?
            value.filter(service => service.name.toLocaleLowerCase('tr-TR').includes(name.toLocaleLowerCase('tr-TR')))
            :
            value
      );
   }
}
