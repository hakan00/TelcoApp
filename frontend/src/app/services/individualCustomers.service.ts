import { Observable, Subscription } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { IndividualCustomers } from 'src/app/models/individualCustomers';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class IndividualCustomersService {
  private controllerUrl = `${environment.apiUrl}/individualCustomers`;
  length: number;
  constructor(private httpClient: HttpClient) {}

  getIndividualCustomers(): Observable<IndividualCustomers[]> {
    return this.httpClient.get<IndividualCustomers[]>(this.controllerUrl);
  }

  getIndividualCustomerDetail(id: number): Observable<IndividualCustomers[]>{
    return this.httpClient.get<IndividualCustomers[]>(`${this.controllerUrl}?customerId=${id}`)
  }

   add(customer: IndividualCustomers) {
      return this.httpClient.post<IndividualCustomers>(`${this.controllerUrl}`, customer);
   }
}

