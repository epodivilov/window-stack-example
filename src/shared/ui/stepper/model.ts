import { createContext } from "react";

const initialState = {
  next: (index?: number): void => {},
  prev: (index?: number): void => {},
};
export const StepperContext = createContext(initialState);
export const StepperProvider = StepperContext.Provider;
export const StepperConsumer = StepperContext.Consumer;
