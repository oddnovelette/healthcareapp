import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'idoSearch'
})

export class SearchfieldPipe implements PipeTransform {
  transform(items: any, value: string, field: string): any {
    if (!value) {
      return items;
    }
    return items.filter((i) => {
      return i[field].toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
  }
}
