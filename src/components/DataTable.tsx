import { useState } from "react";
import { mockedEmployees } from "../utils/mockedEmployees";
import { DataTableBody } from "./DataTableBody";
import { DataTableHead } from "./DataTableHead";
import { DataTablePagination } from "./DataTablePagination";
import { DataTableUtilities } from "./DataTableUtilities";

export const DataTable = (props: {
  dataset: Array<object>;
  fields?: Array<string>;
}) => {
  const [rowKeywordsFilter, setrowKeywordsFilter] = useState("");
  const [rowNumberFilter, setRowNumberFilter] = useState(10);
  const [rowRange, setRowRange] = useState([0, 0]);
  const [currentRows, setCurrentRows] = useState(mockedEmployees);

  const extractFields: Function = (): string[] => {
    return Object.keys(props.dataset[0]);
  };

  return (
    <div className="datatable">
      <DataTableUtilities
        rowNumberFilter={rowNumberFilter}
        setRowNumberFilter={setRowNumberFilter}
        rowKeywordsFilter={rowKeywordsFilter}
        setrowKeywordsFilter={setrowKeywordsFilter}
      />

      <table>
        <DataTableHead
          fields={props.fields ? props.fields : extractFields(props.dataset)}
        />
        <DataTableBody dataset={currentRows} />
      </table>

      <DataTablePagination
        rowRange={rowRange}
        rowNumberFilter={rowNumberFilter}
        currentRows={currentRows}
      />
    </div>
  );
};
