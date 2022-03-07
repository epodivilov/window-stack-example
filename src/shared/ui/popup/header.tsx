import clsx from "clsx";
import { FC } from "react";
import "./popup.css";

type HeaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export const Header: FC<HeaderProps> = ({ children, className, ...rest }) => {
  return (
    <header {...rest} className={clsx("popup-header-content", className)}>
      {children}
    </header>
  );
};
