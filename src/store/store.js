import { employeesReducer } from './employee/reducer';
import { configureStore } from '@reduxjs/toolkit'



export const store = configureStore({
    reducer: {
      employees: employeesReducer
    },
  })

