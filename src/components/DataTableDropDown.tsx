export const DatabatableDropDown = (props: {
  row: {
    [keys: string]: string | number;
  };
}) => {
  const keys = Object.keys(props.row);

  return (
    <tr className="datatable-dropdown">
      <td colSpan={4}>
        <ul>
          {keys.map((key) => (
            <li>
              <span>{key}</span>
              <span>{props.row[key]}</span>
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
};
