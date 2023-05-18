import { createAction, props } from '@ngrx/store';
import { Services } from 'src/app/models/services';


export const addService = createAction(
  '[Service] Add Service',
  props<{ services: Services }>()
);