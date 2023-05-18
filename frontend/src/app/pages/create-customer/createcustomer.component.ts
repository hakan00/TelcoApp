import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

import { AppStoreState } from 'src/app/store/app.state';
import { CorporateCustomerInfoModel } from 'src/app/models/corporateCustomerInfoModel';
import { DatePipe } from '@angular/common';
import { IndividualCustomerInfoModel } from 'src/app/models/individualCustomerInfoModel';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { setCorporateCustomerInfoModel } from 'src/app/store/customerToRegister/customer.actions';
import { setCustomerType } from 'src/app/store/customer-type/customer-type.actions';
import { setIndividualCustomerInfoModel } from 'src/app/store/individualCustomerStore/individualCustomer.action';

@Component({
   selector: 'app-createcustomer',
   templateUrl: './createcustomer.component.html',
   styleUrls: ['./createcustomer.component.css']
})
export class CreateCustomerComponent implements OnInit {
   selected = 'individual';
   isCorporate = false;
   corporateCustomerForm!: FormGroup;
   individualCustomerForm!: FormGroup;
   individualCustomerInfoModel$!: Observable<IndividualCustomerInfoModel | null>;
   corporateCustomerInfoModel$!: Observable<CorporateCustomerInfoModel | null>;
   corporateCustomerInfo!: CorporateCustomerInfoModel;
   individualCustomerInfo!: IndividualCustomerInfoModel;
   birthDate: Date = new Date();

   constructor(
      private store: Store<AppStoreState>,
      private formBuilder: FormBuilder,
      private toastrService: ToastrService,
      private router: Router
   ) {
      this.store.select((s) => s.customerType.customerType).subscribe(res => this.selected = res ? res : 'individual');
      this.corporateCustomerInfoModel$ = this.store.select((s) => s.corporateCustomer.corporateCustomerInfo);
      this.individualCustomerInfoModel$ = this.store.select((s) => s.individualCustomer.individualCustomerInfo);
   }

   ngOnInit(): void {
      this.setIsCorporate();
      this.corporateCustomerInfoModel$.subscribe((response) => {
         if (response != null) this.corporateCustomerInfo = response;
         this.createCorporateCustomerForm();
      });
      this.individualCustomerInfoModel$.subscribe((response) => {
         if (response != null) this.individualCustomerInfo = response;
         this.createIndividualCustomerForm();
      });
      this.store.dispatch(setCustomerType({ customerType: this.selected }));
   }

   changeValue(event: any) {
      this.selected = event;
      this.setIsCorporate();
      this.store.dispatch(setCustomerType({ customerType: event }));
   }

   setIsCorporate() {
      this.isCorporate = this.selected == 'corporate';
   }

   createCorporateCustomerForm() {
      this.corporateCustomerForm = this.formBuilder.group({
         companyName: [this.corporateCustomerInfo?.companyName ?? '', Validators.required],
         taxNumber: [this.corporateCustomerInfo?.taxNumber ?? '', Validators.required],
      });
   }

   createIndividualCustomerForm() {
      const olderThanValidator = (minAge: number): ValidatorFn => control => {
         console.log({ control });
         return (new Date()).getFullYear() - (new Date(control.value)).getFullYear() < minAge ? { message: `Age has to be older than ${minAge}` } : null;
      };

      this.individualCustomerForm = this.formBuilder.group({
         firstName: [this.individualCustomerInfo?.firstName ?? '', Validators.required],
         lastName: [this.individualCustomerInfo?.lastName ?? '', Validators.required],
         birthDate: [this.individualCustomerInfo?.birthDate ?? '', [Validators.required, olderThanValidator(18), Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      });
   }

   saveState() {
      if (this.selected == 'corporate') {
         if (this.corporateCustomerForm.invalid) {
            this.toastrService.error("Please make sure to fill in the required fields!");
         } else {
            this.store.dispatch(
               setCorporateCustomerInfoModel({ corporateCustomerInfoModel: this.corporateCustomerForm.value })
            );
            this.router.navigateByUrl('/selected-catalogs');
         }
      } else {
         if (this.individualCustomerForm.invalid) {
            if (this.individualCustomerForm.invalid && !!this.individualCustomerForm.value.firstName && !!this.individualCustomerForm.value.lastName) {
               this.toastrService.error(`Age has to be older than 18`);
               return;
            }

            this.toastrService.error("Please make sure to fill in the required fields!");
         } else {
            this.store.dispatch(
               setIndividualCustomerInfoModel({ individualCustomerInfoModel: this.individualCustomerForm.value })
            );
            this.router.navigateByUrl('/selected-catalogs');
         }
      }
   }

}

// * ngIf="individualCustomerForm.get('birthDate').touched && individualCustomerForm.getError('older') as error";