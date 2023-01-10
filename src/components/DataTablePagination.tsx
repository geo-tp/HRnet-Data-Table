import { useEffect, useState } from "react";

export const DataTablePagination = (props: {
  rowNumberFilter: number;
  rowTotalCount: number;
  pageIndex: number;
  currentRows: object[];
  setPageIndex: Function;
}) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([1]);

  useEffect(() => {
    const pageCount = props.rowTotalCount / props.rowNumberFilter + 1;
    const pages = [];

    for (let i = 1; i < pageCount; i++) {
      pages.push(i);
    }

    setPageNumbers(pages);
  }, [props.rowTotalCount, props.rowNumberFilter]);

  // Add/Substract a value to pageIndex with max/min constraints (used by arrows button)
  const changePageIndex = (valueToAdd: number) => {
    const maxIndex = Math.floor(props.rowTotalCount / props.rowNumberFilter);

    let finalIndex = Math.min(props.pageIndex + valueToAdd, maxIndex);
    finalIndex = Math.max(0, finalIndex);

    props.setPageIndex(finalIndex);
  };

  return (
    <div className="datatable-pagination">
      <p className="datatable-pagination__infos">
        Showing {props.rowNumberFilter * props.pageIndex + 1} to{" "}
        {props.rowNumberFilter * props.pageIndex + props.rowNumberFilter} of{" "}
        {props.rowTotalCount} total records.
      </p>
      <div className="datatable-pagination__buttons">
        <button
          onClick={(e) => changePageIndex(-1)}
          className="datatable-pagination__previous"
        >
          Previous
        </button>
        <div className="datatable-pagination__buttons__pages">
          {pageNumbers.map((pageNumber) => (
            <button onClick={() => props.setPageIndex(pageNumber - 1)}>
              {pageNumber}
            </button>
          ))}
        </div>
        <button
          onClick={(e) => changePageIndex(1)}
          className="datatable-pagination__next"
        >
          Next
        </button>
      </div>
    </div>
  );
};
