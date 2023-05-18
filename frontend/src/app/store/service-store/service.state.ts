import { Services } from "src/app/models/services";

export interface ServiceState {
    services: Services | null;
  }
  
  export const initialServiceState: ServiceState = {
    services: null,
  };