/* eslint-disable no-unused-vars */
import { useReducer } from "react";
import { initialCartState, reducerCart, CAR } from "../reducer/cartReducer";


export function useCarReducer() {

  const [state, dispath] = useReducer( reducerCart,initialCartState);

  const addCar = ( product ) => {
    dispath({
      type: CAR.ADD,
      product
    })
  }
  const removeOfCar = ( product ) => {
    dispath({
      type:CAR.ERASE_SOME,
      product
    })
  }
  const clearCar = ( product ) => {
    dispath({
      type: CAR.CLEAR
    })
  }

  return { state, addCar, removeOfCar, clearCar }
}