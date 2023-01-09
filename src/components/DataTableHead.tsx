export const DataTableHead = (props: { fields: string[] }) => {
  return (
    <thead className="datatable-head">
      <tr>
        {props.fields?.map((field, index) => (
          <th key={`datatable-fields-${index}`}>{field}</th>
        ))}
      </tr>
    </thead>
  );
};
