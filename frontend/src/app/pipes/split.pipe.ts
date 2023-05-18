import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split',
})
export class SplitPipe implements PipeTransform {
  // uyguladığım metinde operatöre göre split yap geriye array olarak elemanları dön
  // "halit,anıl,burak,burak,büşranur,helin"
  // ["halit","anıl","burak","burak","helin"]
  transform(value: string, operator: string): string[] {
    return value.split(operator);
  }
}
