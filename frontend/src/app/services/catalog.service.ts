import { Catalog } from '../models/catolog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
   providedIn: 'root',
})

export class CatalogService {
   private controllerUrl = `${environment.apiUrl}/catalogs`;
   constructor(private httpClient: HttpClient) { }

   getCatalogs(): Observable<Catalog[]> {
      return this.httpClient.get<Catalog[]>(this.controllerUrl);
   }

   add(catalog: Catalog): Observable<Catalog> {
      return this.httpClient.post<Catalog>(`${this.controllerUrl}`, catalog);
   }

   update(catalog: Catalog): Observable<Catalog> {
      return this.httpClient.put<Catalog>(
         `${this.controllerUrl}/${catalog.id}`,
         catalog
      );
   }

   delete(id: number): Observable<void> {
      return this.httpClient.delete<void>(`${this.controllerUrl}/${id}`);
   }
}
