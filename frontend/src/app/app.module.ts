import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreState } from './store/app.state';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { CardsComponent } from './components/service-list/cards.component';
import { CorporateCustomersComponent } from './components/customers/corporate-customers/corporate-customers.component';
import { CorporateCustomersDetailComponent } from './pages/corporate-customer-detail/corporate-customers-detail/corporate-customers-detail.component';
import { CreateCustomerComponent } from './pages/create-customer/createcustomer.component';
import { CreateFakeArrayPipe } from './pipes/create-fake-array.pipe';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail/customer-detail.component';
import { DatePipe } from '@angular/common';
import { FilterCompanyPipe } from './pipes/filter-company.pipe';
import { FilterNamePipe } from './pipes/filter-name.pipe';
import { FilterServicePipe } from './pipes/filter-service.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { IndividualCustomersComponent } from './components/customers/individualCustomers/individualCustomers.component';
import { InputTextModule } from 'primeng/inputtext';
import { JwtModule } from '@auth0/angular-jwt';
import { LoadingComponent } from './pages/loading/loading.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { LoginComponent } from './pages/login/login.component';
import { MatSelectModule } from '@angular/material/select';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewCustomerComponent } from './pages/new-customer/new-customer.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OverlayTitleComponent } from './components/overlay-title/overlay-title.component';
import { RouterModule } from '@angular/router';
import { SelectedCatalogsComponent } from './pages/selected-catalogs/selected-catalogs.component';
import { SplitPipe } from './pipes/split.pipe';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { TableModule } from 'primeng/table';
import { ToastrModule } from 'ngx-toastr';
import { appReducers } from './store/app.reducer';

@NgModule({
   declarations: [
      AppComponent,
      FilterServicePipe,
      CreateFakeArrayPipe,
      SplitPipe,
      LoginComponent,
      HomeComponent,
      NavbarComponent,
      FooterComponent,
      CardsComponent,
      LoginComponent,
      LoadingComponent,
      IndividualCustomersComponent,
      CorporateCustomersComponent,
      CustomerDetailComponent,
      CorporateCustomersDetailComponent,
      OverlayTitleComponent,
      CreateCustomerComponent,
      SelectedCatalogsComponent,
      FilterNamePipe,
      FilterCompanyPipe,
      NewCustomerComponent,
      CapitalizeFirstPipe
   ],
   imports: [
      TableModule,
      ButtonModule,
      InputTextModule,
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      MatSelectModule,
      ReactiveFormsModule,
      NgbModule,
      RouterModule,
      ToastrModule.forRoot({
         positionClass: 'toast-bottom-right',
      }),
      JwtModule.forRoot({
         config: {
            tokenGetter: () => {
               return localStorage.getItem('token');
            },
         },
      }),
      StoreModule.forRoot<AppStoreState>(appReducers),
      StoreDevtoolsModule.instrument({
         autoPause: false,
      }),
   ],
   exports: [],
   providers: [
      { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      DatePipe,
   ],
   bootstrap: [AppComponent],
})
export class AppModule { }
