import { FC, Children, useState, useMemo, useCallback, useEffect } from "react";
import { Step } from "./step";

import { StepperProvider } from "./model";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./stepper.css";

function clamp(value: number, min = 0, max = 1) {
  return Math.max(min, Math.min(value, max));
}

type StepperProps = {
  onClose: (index?: number) => void;
  onSubmit: (index?: number) => void;
  startFrom?: number;
  stepsOnScreen?: number;
};
export const Stepper: FC<StepperProps> = ({ children, onClose, onSubmit, startFrom = 0, stepsOnScreen = 1 }) => {
  const [index, setIndex] = useState(startFrom);

  // @ts-expect-error
  const steps = useMemo(() => Children.toArray(children).filter((it) => it.type === Step), [children]);
  const step = useMemo(() => {
    const to = index + 1;
    const from = Math.max(to - stepsOnScreen, 0);
    return steps.slice(from, to);
  }, [steps, index]);

  const next = useCallback((i?: number) => {
    if (typeof i === "number") {
      return setIndex(clamp(i, -1, steps.length));
    }

    return setIndex((s) => Math.min(s + 1, steps.length));
  }, [steps]);
  const prev = useCallback((i?: number) => {
    if (typeof i === "number") {
      return setIndex(clamp(i, -1, steps.length));
    }

    return setIndex((s) => Math.max(s - 1, -1));
  }, [steps]);

  useEffect(() => {
    if (steps.length === 0) {
      return;
    }

    if (index === -1) {
      onClose();
      return;
    }
    if (index === steps.length) {
      onSubmit();
      return;
    }
  }, [index]);

  return (
    <StepperProvider value={{ prev, next }}>
      <TransitionGroup>
        {step.map((item) => (
          // @ts-expect-error
          <CSSTransition key={item.props.id} classNames="step" timeout={500}>
            {item}
          </CSSTransition>
        ))}
      </TransitionGroup>
    </StepperProvider>
  );
};
