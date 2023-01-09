import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { ModalContainer } from "../containers/ModalContainer";
import { addEmployee } from "../store/employee/actions";
import { EmployeeType } from "../types";
import { AlertMessage } from "./AlertMessage";
import { usaStates } from "../utils/usaStates";

export const EmployeeCreateForm = () => {
  const dispatch = useDispatch();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [startdate, setStartdate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Alabama");
  const [zipcode, setZipcode] = useState("");
  const [department, setDepartment] = useState("Sales");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLElement>): void => {
    e.preventDefault();

    const newEmployee: EmployeeType = {
      firstname: firstname,
      lastname: lastname,
      startdate: startdate,
      department: department,
      birthdate: birthdate,
      street: street,
      city: city,
      state: state,
      zipcode: zipcode,
    };

    dispatch(addEmployee(newEmployee));

    setFirstname("");
    setLastname("");
    setBirthdate("");
    setStartdate("");
    setStreet("");
    setCity("");
    setState("Alabama");
    setZipcode("");
    setDepartment("Sales");

    setModalIsOpen(true);
  };

  return (
    <form
      className="employee-create-form"
      action="#"
      id="create-employee"
      onSubmit={handleSubmit}
    >
      <label htmlFor="first-name">First Name</label>
      <input
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        type="text"
        id="first-name"
        required
      />
      <label htmlFor="last-name">Last Name</label>
      <input
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        type="text"
        id="last-name"
        required
      />
      <label htmlFor="date-of-birth">Date of Birth</label>
      <input
        id="date-of-birth"
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        required
      />
      <label htmlFor="start-date">Start Date</label>
      <input
        id="start-date"
        type="date"
        value={startdate}
        onChange={(e) => setStartdate(e.target.value)}
        required
      />
      <fieldset className="address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input
          id="street"
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
        />

        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <label htmlFor="state">State</label>
        <select
          name="state"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        >
          {usaStates.map((state, index) => (
            <option key={`usa-state-${index}`} value={state.abbreviation}>
              {state.name}
            </option>
          ))}
        </select>

        <label htmlFor="zip-code">Zip Code</label>
        <input
          id="zip-code"
          type="number"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          required
        />
      </fieldset>
      <label htmlFor="department">Department</label>
      <select
        name="department"
        id="department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      >
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>
      <button className="employee-create-form__button">Save</button>
      {modalIsOpen && (
        <ModalContainer>
          <AlertMessage
            message="Employee created!"
            setModalIsOpen={setModalIsOpen}
          />
        </ModalContainer>
      )}
    </form>
  );
};
