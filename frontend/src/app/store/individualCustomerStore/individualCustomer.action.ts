import { createAction, props } from "@ngrx/store";

import { IndividualCustomerInfoModel } from "src/app/models/individualCustomerInfoModel";

export const setIndividualCustomerInfoModel = createAction(
    '[Customer] Set Corporate Customer Info',
    props<{ individualCustomerInfoModel: IndividualCustomerInfoModel }>()
  );

export const resetIndividualCustomer = createAction(
   '[Catalog] Reset Individual Customer Info',
   props
);