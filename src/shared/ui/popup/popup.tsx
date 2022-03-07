import { Children, FC, ReactElement, useMemo } from "react";
import { createPortal } from "react-dom";
import { Backdrop } from "../backdrop";
import { Footer } from "./footer";
import { Header } from "./header";
import { Main } from "./main";
import "./popup.css";

const node = document.getElementById("portal");

type PopupProps = { open?: boolean; onClose?: () => void; backdrop?: boolean; zIndex?: number };
export const Popup: FC<PopupProps> = ({ open, onClose, children, backdrop = true, zIndex }) => {
  if (!open) {
    return null;
  }

  const { header, footer, content } = useMemo(() => {
    type Result = { header: ReactElement | null; footer: ReactElement | null; content: ReactElement | null };

    return Children.toArray(children).reduce<Result>(
      (result, it) => {
        // @ts-expect-error
        if (it.type === Header) {
          result.header = it as ReactElement;
          // @ts-expect-error
        } else if (it.type === Footer) {
          result.footer = it as ReactElement;
          // @ts-expect-error
        } else if (it.type === Main) {
          result.content = it as ReactElement;
        }

        return result;
      },
      { header: null, footer: null, content: null }
    );
  }, [children]);

  return createPortal(
    <div className="popup" style={zIndex != null ? { zIndex } : undefined}>
      {backdrop && <Backdrop />}

      <div className="popup-wrapper">
        <div className="popup-header">
          {header}
          <button className="popup-close" onClick={onClose}>
            ⤬
          </button>
        </div>
        {content}
        <div className="popup-footer">{footer}</div>
      </div>
    </div>,
    node as HTMLElement
  );
};
