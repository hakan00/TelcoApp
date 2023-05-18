import { Pipe, PipeTransform } from '@angular/core';

import { IndividualCustomers } from '../models/individualCustomers';
import { IndividualCustomersComponent } from '../components/customers/individualCustomers/individualCustomers.component';

@Pipe({
   name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {


   transform(value: IndividualCustomers[], key: string, name: string = ''): any {

      if (!name) return value;

      switch (key) {
         case "name":
            return value.filter((customer) => customer.firstName.toLocaleLowerCase('tr-TR').includes(name.toLocaleLowerCase('tr-TR')));
            break;
         case "id":
            return value.filter((customer) => customer.nationalIdentity.toString().includes(name));
            break;
         case "birthDay":
            return value.filter((customer: IndividualCustomers) => {
               const [day, month, year] = customer.birthDate.split('.');
               let date = new Date(+year, +month - 1, +day);
               return (
                  date > new Date(name)
               );
            });
            break;
         default:
            alert("not working");
            break;
      }
   }
}
