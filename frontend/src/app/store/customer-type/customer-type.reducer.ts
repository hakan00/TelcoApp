import { CustomerTypeState, initialCustomerTypeState } from './customer-type.state';
import { createReducer, on } from '@ngrx/store';

import { setCustomerType } from './customer-type.actions';

export const customerTypeReducer = createReducer<CustomerTypeState>(
   initialCustomerTypeState,
   on(setCustomerType, (currentState, action) => {
      return { ...currentState, customerType: action.customerType };
   })
);