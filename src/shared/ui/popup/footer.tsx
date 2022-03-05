import { FC } from "react";
import "./popup.css";

type FooterProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export const Footer: FC<FooterProps> = ({ children, ...rest }) => {
  return (
    <footer {...rest} className="popup-footer-content">
      {children}
    </footer>
  );
};
