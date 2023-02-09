import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[] | null, filter: string, columns: string[]) {
    let res: any[] = [];

    if(filter.length === 0 || columns.length === 0 ||  arr === null) return arr;

    res = arr.filter(elem => this.coincidence(elem, columns, filter));

    return res;
  }

  
  coincidence(elem: any, columns: string[], filter: string) {
    let bol = false;
    columns.every(col =>{
      bol = elem[col].toLowerCase().includes(filter.toLowerCase());
      if(bol) return false;
      return true;
    })
    return bol;
  } 

}
