import { Catalog } from "src/app/models/catolog";

export interface SelectedCatalogsState {
    selectedCatalogs: Catalog[] | null;
  }
  
export const initialSelectedCatalogsState: SelectedCatalogsState = {
     selectedCatalogs: null,
  };
  