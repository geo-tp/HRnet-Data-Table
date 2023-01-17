import { DataTable } from "../components/DataTable/DataTable";
import { PrimaryHeader } from "../components/PrimaryHeaders";
import { DataTableContainer } from "../containers/DataTableContainer";
import { mockedEmployees } from "../data/mockedEmployees";

export const EmployeesPage = () => {
  return (
    <div className="employees-pages">
      <PrimaryHeader title="Current Employees" />
      <DataTableContainer>
        <DataTable
          dataset={mockedEmployees}
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
