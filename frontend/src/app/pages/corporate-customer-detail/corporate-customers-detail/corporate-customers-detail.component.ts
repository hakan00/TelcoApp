import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CorporateCustomers } from 'src/app/models/corporateCustomers';
import { Subscription } from 'src/app/models/subscription';
import { CorporateCustomersService } from 'src/app/services/corporate-customer.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-corporate-customers-detail',
  templateUrl: './corporate-customers-detail.component.html',
  styleUrls: ['./corporate-customers-detail.component.css']
})
export class CorporateCustomersDetailComponent implements OnInit {

  corporateCustomers!: CorporateCustomers[];
  customerId !: number ;
  subscription: Subscription[] =[];
  details !: CorporateCustomers;

  constructor(
    private router: Router,
    private corporateCustomersService: CorporateCustomersService,
    private activatedRoute: ActivatedRoute,
    private subscriptionService: SubscriptionService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.corporateCustomersService.getCorporateCustomersDetail(+params['id'])
      .subscribe(response =>
        {
           this.details = response[0]
           this.customerId=this.details.customerId;
           this.getSubscriptions();
        }
        )
    });
  }

  getSubscriptions() {
    this.subscriptionService.getToSubscriptions(this.customerId).subscribe((res) => {
     this.subscription = res;
   })
  }

}
