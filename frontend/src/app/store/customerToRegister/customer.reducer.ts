import { CorporateCustomerState, initialCorporateCustomerState } from './customer.state';
import { createReducer, on } from '@ngrx/store';
import { resetCorporateCustomer, setCorporateCustomerInfoModel } from './customer.actions';

export const corporateCustomerReducer = createReducer<CorporateCustomerState>(
   initialCorporateCustomerState,
   on(setCorporateCustomerInfoModel, (currentState, action) => {
      return { ...currentState, corporateCustomerInfo: action.corporateCustomerInfoModel };
   }),
   on(resetCorporateCustomer, () => initialCorporateCustomerState),
);