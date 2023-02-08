import { PrimaryHeader } from "../components/PrimaryHeaders";
import { DataTableContainer } from "../containers/DataTableContainer";
import { DataTable } from "react-typescript-data-table";
import { useSelector } from "react-redux";
import { selectEmployees } from "../store/employee/selectors";

export const EmployeesPage = () => {
  const employees = useSelector(selectEmployees);

  return (
    <div className="employees-pages">
      <PrimaryHeader title="Current Employees" />
      <DataTableContainer>
        <DataTable
          dataset={employees}
          fields={[
            "First Name",
            "Last Name",
            "Start Date",
            "Department",
            "Date of Birth",
            "Street",
            "City",
            "State",
            "Zip Code",
          ]}
        />
      </DataTableContainer>
    </div>
  );
};
