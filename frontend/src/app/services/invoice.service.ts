import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
   providedIn: 'root'
})
export class InvoiceService {
   private controllerUrl = `${environment.apiUrl}/invoices`;

   constructor(private httpClient: HttpClient) { }

   getInvoice(id: number) {
      return this.httpClient.get<Invoice>(
         `${this.controllerUrl}/${id}`
      );
   }

   add(invoice: Invoice): Observable<Invoice> {
      return this.httpClient.post<Invoice>(this.controllerUrl, invoice);
   }

   // getToInvoices(
   //    customerId: number
   // ): Observable<Invoice[]> {
   //    return this.httpClient.get<Invoice[]>(
   //       `${this.controllerUrl}?customerId=${customerId}`
   //    );
   // }
}
