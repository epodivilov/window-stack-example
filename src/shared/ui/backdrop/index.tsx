import clsx from "clsx";
import { FC } from "react";
import "./backdrop.css";

type BackdropProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export const Backdrop: FC<BackdropProps> = ({ className, ...rest }) => {
  return <div {...rest} className={clsx("backdrop", className)} />;
};
