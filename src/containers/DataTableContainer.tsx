import { ReactNode } from "react";

export const DataTableContainer = (props: { children: ReactNode }) => {
  return <div className="datatable-container">{props.children}</div>;
};
