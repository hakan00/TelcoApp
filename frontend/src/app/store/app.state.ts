import { AuthStoreState } from './auth/auth.state';
import { CorporateCustomerState } from './customerToRegister/customer.state';
import { CustomerTypeState } from './customer-type/customer-type.state';
import { IndividualCustomerState } from './individualCustomerStore/individualCustomer.state';
import { SelectedCatalogsState } from './catalog-store/selectedCatalogs.state';

export interface AppStoreState {
  auth: AuthStoreState;
  corporateCustomer: CorporateCustomerState;
  individualCustomer: IndividualCustomerState;
  selectedCatalogs: SelectedCatalogsState;
  customerType: CustomerTypeState;
}
