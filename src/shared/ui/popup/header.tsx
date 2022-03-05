import { FC } from "react";
import "./popup.css";

type HeaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export const Header: FC<HeaderProps> = ({ children, ...rest }) => {
  return (
    <header {...rest} className="popup-header-content">
      {children}
    </header>
  );
};
