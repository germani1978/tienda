import { useContext } from "react";
import { FilterContext } from "../context/filter";

export const useFilters = () => {
  const { filters } = useContext(FilterContext);

  const filterProducts = (products) =>
    products.filter(
      (product) =>
        (product.price <= filters.maxPrice) && (filters.cat === "all" ||
        filters.cat === product.category)
    );

  return { filterProducts };
};
