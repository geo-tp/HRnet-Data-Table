export const DataTableUtilities = (props: {
  rowNumberFilter: number;
  setRowNumberFilter: Function;
  rowKeywordsFilter: string;
  setrowKeywordsFilter: Function;
}) => {
  return (
    <div className="datatable-utilites">
      <div className="datatable-utilities__row-number-selector">
        <span>Show </span>
        <select
          onChange={(e) => props.setRowNumberFilter(e.target.value)}
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

      <div className="datatable-utilities__seach-bar">
        <label htmlFor="row-search-bar">Search</label>
        <input
          value={props.rowKeywordsFilter}
          onChange={(e) => props.setrowKeywordsFilter(e.target.value)}
          type="text"
          name="row-search-bar"
          id="row-search-bar"
        />
      </div>
    </div>
  );
};
