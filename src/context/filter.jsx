/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    cat: "all",
    maxPrice: 2000,
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
}
