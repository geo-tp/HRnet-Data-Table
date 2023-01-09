import { ReactNode } from "react";

export const DefaultContainer = (props: { children: ReactNode }) => {
  return <div className="default-container">{props.children}</div>;
};
