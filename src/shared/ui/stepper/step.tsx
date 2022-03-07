import { memo, ReactElement, useContext } from "react";
import { StepperContext } from "./model";

type Props = {
  next: (index?: number) => void;
  prev: (index?: number) => void;
};
type StepProps = {
  children: ({ next, prev }: Props) => ReactElement;
};
export const Step = memo<StepProps>(({ children }) => {
  const value = useContext(StepperContext);

  return children(value);
});
