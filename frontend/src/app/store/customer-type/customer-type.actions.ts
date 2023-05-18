import { createAction, props } from '@ngrx/store';

export const setCustomerType = createAction(
  '[Customer Type] Set Customer Type',
  props<{ customerType: string }>()
);