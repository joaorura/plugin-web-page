import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'textPipe'})
export class TextPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\n/g, '<br>').replace(/\t/g, '<pre>     </pre>');
  }
}
