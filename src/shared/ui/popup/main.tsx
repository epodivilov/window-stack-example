import clsx from "clsx";
import { FC } from "react";
import "./popup.css";

type MainProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export const Main: FC<MainProps> = ({ children, className, ...rest }) => {
  return (
    <main {...rest} className={clsx("popup-content", className)}>
      {children}
    </main>
  );
};
