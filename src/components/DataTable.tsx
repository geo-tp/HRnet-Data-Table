import { useEffect, useState } from "react";
import { DataTableBody } from "./DataTableBody";
import { DataTableHead } from "./DataTableHead";
import { DataTablePagination } from "./DataTablePagination";
import { DataTableUtilities } from "./DataTableUtilities";

export const DataTable = (props: {
  dataset: Array<object>;
  fields?: Array<string>;
}) => {
  const [rowNumberFilter, setRowNumberFilter] = useState(10);
  const rowTotalCount = props.dataset.length;
  const [currentRows, setCurrentRows] = useState(props.dataset);
  const [pageIndex, setPageIndex] = useState(0);

  // Reset page index to 0 when rowNumberFilter get updated
  useEffect(() => {
    setPageIndex(0);
  }, [rowNumberFilter]);

  // Calculate current showing rows taking into account pagination
  useEffect(() => {
    const currentStartIndex = pageIndex * rowNumberFilter;
    const currentEndIndex = pageIndex * rowNumberFilter + rowNumberFilter;
    setCurrentRows(props.dataset.slice(currentStartIndex, currentEndIndex));
  }, [rowNumberFilter, pageIndex, props.dataset]);

  // Return keys of dataset object to use it as fields if props.fields is null
  const extractFields: Function = (): string[] => {
    return Object.keys(props.dataset[0]);
  };

  return (
    <div className="datatable">
      <DataTableUtilities
        rowNumberFilter={rowNumberFilter}
        setRowNumberFilter={setRowNumberFilter}
        currentRows={currentRows}
        setCurrentRows={setCurrentRows}
      />

      <table>
        <DataTableHead
          currentRows={currentRows}
          setCurrentRows={setCurrentRows}
          namedFields={
            props.fields ? props.fields : extractFields(props.dataset)
          }
          tableFields={extractFields(props.dataset)}
        />
        <DataTableBody dataset={currentRows} />
      </table>

      <DataTablePagination
        rowNumberFilter={rowNumberFilter}
        rowTotalCount={rowTotalCount}
        currentRows={currentRows}
        setPageIndex={setPageIndex}
        pageIndex={pageIndex}
      />
    </div>
  );
};
