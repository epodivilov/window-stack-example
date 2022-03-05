import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import "./backdrop.css";

export const Backdrop: FC = () => {
  return (
    <CSSTransition className="backdrop" timeout={500}>
      <div className="backdrop" />
    </CSSTransition>
  );
};
