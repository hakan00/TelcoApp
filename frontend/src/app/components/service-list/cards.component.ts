import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Services } from 'src/app/models/services';
import { ServicesService } from 'src/app/services/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
   selector: 'services',
   templateUrl: './cards.component.html',
   styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

   services: Services[] = [];
   searchText: string = '';
   addForm!: FormGroup;
   displayAddForm: boolean = false;
   clonedService: { [s: string]: Services } = {};

   constructor(
      private serviceService: ServicesService,
      private formBuilder: FormBuilder,
      private toastr: ToastrService
   ) { }

   ngOnInit(): void {
      this.getServices();
      this.createAddForm();
   }

   createAddForm() {
      this.addForm = this.formBuilder.group({
         name: ['', Validators.required],
      });
   }

   getServices(): void {
      this.serviceService.getServices().subscribe((response: Services[]) => {
         this.services = response;
      });
   }

   add(): void {
      if (this.addForm.invalid) {
         this.toastr.warning('Please enter a service name!');
         return;
      }

      const service: Services = {
         ...this.addForm.value,
      };

      this.serviceService.add(service).subscribe({
         next: () => {
            this.toastr.success(`${service.name} added`);
         },
         error: (err) => {
            console.log(err);
            this.toastr.error(err.statusText);
         },
         complete: () => {
            this.displayAddForm = false;
            this.addForm.reset();
            this.getServices();
         },
      });
   }

   update(service: Services): void {
      if(!service.name){
         this.toastr.warning('Please enter a service name!');
         return;
      }

      this.serviceService.update(service).subscribe({
         next: () => {
            this.toastr.success('The service has been successfully added.');
         },
         error: (err) => {
            console.log(err);
            this.toastr.error(err.statusText);
            this.toastr.error('The operation could not be performed.');
         }
      });
   }

   delete(service: Services) {
      this.serviceService.delete(service.id).subscribe({
         next: () => this.toastr.success(`${service.name} removed`),
         error: (err) => {
            console.log(err);
            this.toastr.error(err.statusText);
            this.toastr.error('The operation could not be performed.');
         },
         complete: () => this.getServices()
      });
   }

   onAdd() {
      this.displayAddForm = !this.displayAddForm;
   }

   onAddCancel() {
      this.displayAddForm = false;
   }

   onRowEditInit(service: Services) {
      this.clonedService[service.id] = { ...service };
   }

   onRowEditSave(service: Services) {
      this.update(service);
   }

   onRowEditCancel(service: Services, index: number) {
      this.services[index] = this.clonedService[service.id];
      delete this.clonedService[service.id];
   }
}
