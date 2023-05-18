import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { AppStoreState } from 'src/app/store/app.state';
import { Catalog } from 'src/app/models/catolog';
import { CatalogService } from 'src/app/services/catalog.service';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { setSelectedCatalogs } from 'src/app/store/catalog-store/selectedCatalogs.action';

@Component({
   selector: 'app-selected-catalogs',
   templateUrl: './selected-catalogs.component.html',
   styleUrls: ['./selected-catalogs.component.css']
})
export class SelectedCatalogsComponent implements OnInit {

   catalogs!: Catalog[];
   catalogForm!: FormGroup;
   selectedCatalogs!: Catalog[];
   selectedCatalogs$!: Observable<Catalog[] | null>;
   noneHasSelected: boolean = true;

   constructor(
      private store: Store<AppStoreState>,
      private formBuilder: FormBuilder,
      private catalogService: CatalogService,
      private router: Router,
      private toastr: ToastrService
   ) { 
      this.selectedCatalogs$ = this.store.select(s => s.selectedCatalogs.selectedCatalogs);
   }
   
   ngOnInit(): void {
      this.getCatalogs();
   }

   getCatalogs() {
      this.catalogService.getCatalogs().subscribe({
         next: response => this.catalogs = response,
         error: res => this.toastr.error(res),
         complete: () => {
            this.selectedCatalogs$.subscribe((response) => {
               if (response != null) this.selectedCatalogs = response;
               this.createCatalogForm();
            });
         }
      });
   }

   createCatalogForm() {
      if(this.catalogs){
         let g = {};
         this.catalogs.forEach((catalog, index) => {
            g = {
               [`selectedCatalogs[${index}]`]: [this.selectedCatalogs && this.selectedCatalogs.find(c => c.id == catalog.id)],
               ...g
            };
         });
         this.catalogForm = this.formBuilder.group(g);
      }
   }

   back() {
      this.saveSelections();
      this.router.navigateByUrl('/create-customer');
   }

   next() {
      this.saveSelections();
      if(this.noneHasSelected) this.toastr.error('Please make at least one selection.');
      if(!this.noneHasSelected) {
         this.router.navigateByUrl('/new-customer');
      }
   }

   saveSelections(){
      Object.entries(this.catalogForm.value).forEach(selected => {
         if (selected[1]) this.noneHasSelected = false;
      });
      if (this.noneHasSelected) {
         return;
      }

      this.selectedCatalogs = this.catalogs.filter((c, i) => this.catalogForm.value[`selectedCatalogs[${i}]`]);
      this.store.dispatch(
         setSelectedCatalogs({ selectedCatalogs: this.selectedCatalogs })
      );
   }

}
