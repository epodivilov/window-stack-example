import clsx from "clsx";
import { FC } from "react";
import "./popup.css";

type FooterProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export const Footer: FC<FooterProps> = ({ children, className, ...rest }) => {
  return (
    <footer {...rest} className={clsx("popup-footer-content", className)}>
      {children}
    </footer>
  );
};
