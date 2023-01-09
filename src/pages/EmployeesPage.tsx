import { DataTable } from "../components/DataTable";
import { PrimaryHeader } from "../components/PrimaryHeaders";

export const EmployeesPage = () => {
  return (
    <div className="employees-pages">
      <PrimaryHeader title="Current Employees" />
      <DataTable
        dataset={[{ firstname: "aaaa", lastname: "bbbb" }]}
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
