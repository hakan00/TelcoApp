import { CorporateCustomerInfoModel } from "src/app/models/corporateCustomerInfoModel";

export interface CorporateCustomerState {
  corporateCustomerInfo: CorporateCustomerInfoModel | null;
}

export const initialCorporateCustomerState: CorporateCustomerState = {
  corporateCustomerInfo: null,
};