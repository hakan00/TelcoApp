import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
   providedIn: 'root',
})
export class CustomerService {
   private controllerUrl = `${environment.apiUrl}/customers`;

   constructor(private httpClient: HttpClient) { }

   add(customer: Customer): Observable<Customer> {
      return this.httpClient.post<Customer>(this.controllerUrl, customer);
   }

}