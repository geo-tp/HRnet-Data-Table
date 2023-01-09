import { DataTableRow } from "./DataTableRow";

export const DataTableBody = (props: { dataset: any[] }) => {
  return (
    <tbody className="datable-body">
      {props.dataset.map((row) => (
        <DataTableRow row={row} />
      ))}
    </tbody>
  );
};
