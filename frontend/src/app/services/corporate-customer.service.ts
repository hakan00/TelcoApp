import { CorporateCustomers } from '../models/corporateCustomers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CorporateCustomersService  {

  private controllerUrl = `${environment.apiUrl}/corporateCustomers`;

  constructor(private httpClient: HttpClient) {}

  getCorporateCustomers(): Observable<CorporateCustomers[]> {
    return this.httpClient.get<CorporateCustomers[]>(this.controllerUrl);
  }

  getCorporateCustomersDetail(id: number): Observable<CorporateCustomers[]>{
     return this.httpClient.get<CorporateCustomers[]>(`${this.controllerUrl}?customerId=${id}`)
   }

   add(customer: CorporateCustomers): Observable<CorporateCustomers> {
      return this.httpClient.post<CorporateCustomers>(`${this.controllerUrl}`, customer);
   }
}