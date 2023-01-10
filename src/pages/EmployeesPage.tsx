import { DataTable } from "../components/DataTable";
import { PrimaryHeader } from "../components/PrimaryHeaders";
import { mockedEmployees } from "../utils/mockedEmployees";

export const EmployeesPage = () => {
  return (
    <div className="employees-pages">
      <PrimaryHeader title="Current Employees" />
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
    </div>
  );
};
