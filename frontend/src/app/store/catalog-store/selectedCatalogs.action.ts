import { createAction, props } from '@ngrx/store';

import { Catalog } from 'src/app/models/catolog';

export const setSelectedCatalogs = createAction(
  '[Catalog] Add Catalog',
   props<{ selectedCatalogs: Catalog[]; }>()
);

export const resetCatalogs = createAction(
  '[Catalog] Reset Catalog',
   props
);
