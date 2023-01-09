import { employeesDefaultState } from "./state";
import { ADD_EMPLOYEE, REMOVE_EMPLOYEE } from "./constants";

export const employeesReducer = (state = employeesDefaultState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return { ...state, data: [...state.data, action.payload] };

    case REMOVE_EMPLOYEE:
      const newData = [];

      for (let employee in state.data) {
        if (Object.keys(employee) !== Object.keys(action.payload)) {
          newData.push(employee);
        }
      }

      return { ...state, data: newData };

    default:
      return state;
  }
};
