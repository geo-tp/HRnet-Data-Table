import { useState } from "react";

export const DataTableUtilities = (props: {
  rowNumberFilter: number;
  setRowNumberFilter: Function;
  currentRows: object[];
  setCurrentRows: Function;
}) => {
  const [rowKeywordsFilter, setRowKeywordsFilter] = useState("");

  return (
    <div className="datatable-utilities">
      <div className="datatable-utilities__row-number-selector">
        <span>Show </span>
        <select
          onChange={(e) => props.setRowNumberFilter(parseInt(e.target.value))}
          name="row-number-selector"
          id="row-number-selector"
        >
          <option selected value="10">
            10
          </option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <span> entries</span>
      </div>

      <div className="datatable-utilities__search-bar">
        <label htmlFor="row-search-bar">Search : </label>
        <input
          value={rowKeywordsFilter}
          onChange={(e) => setRowKeywordsFilter(e.target.value)}
          type="text"
          name="row-search-bar"
          id="row-search-bar"
        />
      </div>
    </div>
  );
};
