import { FC, Children, useState, useMemo, useCallback, useEffect } from "react";
import { Step } from "./step";

import { StepperProvider } from "./model";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { clamp } from "../../lib/clamp";

import "./stepper.css";
import { Backdrop } from "../backdrop";

type StepperProps = {
  onClose: (index?: number) => void;
  onSubmit: (index?: number) => void;
  startFrom?: number;
  stepsOnScreen?: number;
};
export const Stepper: FC<StepperProps> = ({ children, onClose, onSubmit, startFrom = 0, stepsOnScreen = 1 }) => {
  const [index, setIndex] = useState(-Infinity);
  const [direction, setDirection] = useState<"rtl" | "ltr">("rtl");

  const steps = useMemo(
    () =>
      Children.toArray(children)
        // @ts-expect-error
        .filter((it) => it.type === Step)
        .map((it: Object, i) => ({ ...it, __id: i })),
    [children]
  );
  const step = useMemo(() => {
    if (index < 0 || index === steps.length) {
      return [];
    }

    const to = index + 1;
    const from = Math.max(to - stepsOnScreen, 0);
    return steps.slice(from, to);
  }, [steps, index]);

  const next = useCallback(
    (i?: number) => {
      const nextIndex = typeof i === "number" ? clamp(i, -1, steps.length) : index + 1;

      setDirection(nextIndex < index ? "ltr" : "rtl");
      requestAnimationFrame(() => setIndex(nextIndex));
    },
    [steps, index]
  );
  const prev = useCallback(
    (i?: number) => {
      const nextIndex = typeof i === "number" ? clamp(i, -1, steps.length) : index - 1;

      setDirection(nextIndex < index ? "ltr" : "rtl");
      requestAnimationFrame(() => setIndex(nextIndex));
    },
    [steps, index]
  );

  useEffect(() => {
    if (index === -1) {
      onClose();
      return;
    }

    if (index === steps.length) {
      onSubmit();
      return;
    }
  }, [index]);

  useEffect(() => {
    setIndex(startFrom);
  }, []);

  return (
    <StepperProvider value={{ prev, next }}>
      {index >= 0 && index < steps.length && <Backdrop style={{ zIndex: index + 1 }} />}
      <TransitionGroup>
        {step.map((item) => (
          <CSSTransition key={item.__id} classNames={direction} timeout={300}>
            {item}
          </CSSTransition>
        ))}
      </TransitionGroup>
    </StepperProvider>
  );
};
