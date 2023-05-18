import { createAction, props } from '@ngrx/store';

import { CorporateCustomerInfoModel } from 'src/app/models/corporateCustomerInfoModel';

export const setCorporateCustomerInfoModel = createAction(
  '[Customer] Set Corporate  Customer Info',
  props<{ corporateCustomerInfoModel: CorporateCustomerInfoModel }>()
);

export const resetCorporateCustomer = createAction(
   '[Catalog] Reset Corporate Customer Info',
   props
);