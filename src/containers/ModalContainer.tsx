import { ReactNode } from "react";

export const ModalContainer = (props: { children: ReactNode }) => {
  return <div className="modal-container">{props.children}</div>;
};
