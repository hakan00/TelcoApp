import { RouterModule, Routes } from '@angular/router';

import { CorporateCustomersComponent } from './components/customers/corporate-customers/corporate-customers.component';
import { CorporateCustomersDetailComponent } from './pages/corporate-customer-detail/corporate-customers-detail/corporate-customers-detail.component';
import { CreateCustomerComponent } from './pages/create-customer/createcustomer.component';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail/customer-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { IndividualCustomersComponent } from './components/customers/individualCustomers/individualCustomers.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { NewCustomerComponent } from './pages/new-customer/new-customer.component';
import { NgModule } from '@angular/core';
import { SelectedCatalogsComponent } from './pages/selected-catalogs/selected-catalogs.component';

const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: 'login', component: LoginComponent },
   { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
   { path: 'individual-customers', component: IndividualCustomersComponent, canActivate: [LoginGuard] },
   { path: 'corporate-customers', component: CorporateCustomersComponent, canActivate: [LoginGuard] },
   { path: 'individual-customers/details/:id', component: CustomerDetailComponent, canActivate: [LoginGuard] },
   { path: 'corporate-customers/details/:id', component: CorporateCustomersDetailComponent, canActivate: [LoginGuard] },
   { path: 'create-customer', component: CreateCustomerComponent, canActivate: [LoginGuard] },
   { path: 'selected-catalogs', component: SelectedCatalogsComponent, canActivate: [LoginGuard] },
   { path: 'new-customer', component: NewCustomerComponent, canActivate: [LoginGuard] }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
