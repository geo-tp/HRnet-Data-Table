import { Link } from "react-router-dom";
import { EmployeeCreateForm } from "../components/EmployeeCreateForm";
import { PrimaryHeader } from "../components/PrimaryHeaders";
import { SecondaryHeader } from "../components/SecondaryHeader";
import { DefaultContainer } from "../containers/DefaultContainer";

export const HomePage = () => {
  return (
    <div className="home-page">
      <PrimaryHeader title="HRnet" />
      <DefaultContainer>
        <Link to="/employees">View Current Employees</Link>
        <SecondaryHeader title="Create Employe" />
        <EmployeeCreateForm />
      </DefaultContainer>
    </div>
  );
};
