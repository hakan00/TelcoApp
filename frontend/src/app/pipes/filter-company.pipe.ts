import { Pipe, PipeTransform } from '@angular/core';

import { CorporateCustomers } from '../models/corporateCustomers';

@Pipe({
   name: 'filterCompany'
})
export class FilterCompanyPipe implements PipeTransform {
   transform(value: CorporateCustomers[], key: string, name: string = ''): any {

      if (!name) return value;

      switch (key) {
         case "name":
            return value.filter((company) => company.companyName.toLocaleLowerCase('tr-TR').includes(name.toLocaleLowerCase('tr-TR')));
            break;
         case "id":
            return value.filter((company) => company.taxNumber.toString().includes(name));
            break;
      }
   }
}