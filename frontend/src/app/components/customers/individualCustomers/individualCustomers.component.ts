import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndividualCustomers } from 'src/app/models/individualCustomers';
import { IndividualCustomersService } from 'src/app/services/individualCustomers.service';


@Component({
  selector: 'individual-customers',
  templateUrl: './individualCustomers.component.html',
  styleUrls: ['./individualCustomers.component.css']
})
export class IndividualCustomersComponent implements OnInit {
  
  individualCustomers!: IndividualCustomers[];
  searchText: string = '';
  error: string = '';
  customerId: any;
  customerName: string='';
  birthDate: string;
  nationalIdentity: string;
  today: string = new Date().getFullYear().toString();

  constructor(
    private router: Router,
    private individualCustomersService: IndividualCustomersService
  ) {}

  ngOnInit(): void {
    this.getIndividualCustomers();
  }

  getIndividualCustomers(): void {
    this.individualCustomersService.getIndividualCustomers()
    .subscribe((response: IndividualCustomers[]) => {
      this.individualCustomers = response;
    } )
  }
 
  showDetails(id: number){
    this.router.navigate(['/individual-customers/details',  id])
  }

  goToCreateCustomerPage() {
    this.router.navigateByUrl('/create-customer')
  }
}

