/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useCarReducer } from "../hooks/useCart";

export const CarContext = createContext();

export function CarProvider({ children }) {

  const { state, addCar, removeOfCar, clearCar } = useCarReducer()

  return (
    <CarContext.Provider value={{ state, addCar, removeOfCar, clearCar }}>
      {children}
    </CarContext.Provider>
  );
}
 