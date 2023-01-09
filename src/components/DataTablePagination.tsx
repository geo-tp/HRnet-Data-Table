export const DataTablePagination = (props: {
  rowNumberFilter: number;
  currentRows: object[];
  rowRange: number[];
}) => {
  return (
    <div className="datatable-pagination">
      <p className="datatable-pagination__infos">Showing X of X</p>
      <div className="datatable-pagination__buttons">
        <button className="datatable-pagination__previous">Previous</button>
        <button className="datatable-pagination__next">Next</button>
      </div>
    </div>
  );
};
