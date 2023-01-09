export const DataTableRow = (props: {
  row: { [keys: string]: string | number };
}) => {
  const values = Object.values(props.row);

  return (
    <tr className="datatable-row">
      {values.map((value, index) => (
        <td key={`datable-row-${index}`}>{value}</td>
      ))}
    </tr>
  );
};
