import { ServiceState, initialServiceState } from "./service.state";
import { createReducer, on } from "@ngrx/store";

import { addService } from "./service.action";

export const serviceReducer = createReducer<ServiceState>(
    initialServiceState,
    on(addService, (currentState, action) => {
      return { ...currentState, services: action.services };
    })
  );