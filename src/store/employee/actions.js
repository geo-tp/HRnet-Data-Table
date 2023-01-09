import { GET_EMPLOYEES, ADD_EMPLOYEE, REMOVE_EMPLOYEE } from "./constants";

export const getEmployees = () => ({ type: GET_EMPLOYEES });
export const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee,
});
export const removeEmployee = (employee) => ({
  type: REMOVE_EMPLOYEE,
  payload: employee,
});
