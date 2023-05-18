import { IndividualCustomerInfoModel } from "src/app/models/individualCustomerInfoModel";

export interface IndividualCustomerState {
    individualCustomerInfo: IndividualCustomerInfoModel | null;
  }
  
  export const initialIndividualCustomerState: IndividualCustomerState = {
    individualCustomerInfo: null,
  };