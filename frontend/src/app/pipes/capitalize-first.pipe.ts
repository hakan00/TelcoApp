import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'capitalizeFirst'
})
export class CapitalizeFirstPipe implements PipeTransform {

   transform(value: string): string {
      const words = value.split(' ');
      const capitalizatedWords = words.map(word => word.charAt(0).toLocaleUpperCase('tr-TR') + word.slice(1));
      const newValue = capitalizatedWords.join(' ');
      return newValue;
   }

}
