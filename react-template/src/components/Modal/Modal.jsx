import { createPortal } from "react-dom";
import { Button, ButtonVariants } from "../Button/Button";

import "./Modal.css";

export const Modal = ({
  children,
  headline,
  description,
  onAccept,
  onCancel,
}) => {
  return createPortal(
    <div className="container">
      <div className="modal">
        <div className="header">
          <h3>{headline}</h3>
          <p>{description}</p>
        </div>
        <div className="content">{children}</div>
        <div className="footer">
          <Button
            onClick={onAccept}
            text={"Accept"}
            variant={ButtonVariants.primary}
          />
          <Button
            onClick={onCancel}
            text={"Cancel"}
            variant={ButtonVariants.secondary}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};
