import { useContext } from "react";
import { FilterContext } from "../context/filter";

/* eslint-disable react/prop-types */
export const Filters = () => {

  const {filters ,setFilters } = useContext(FilterContext)

  const handlePrice = (e) => {
    setFilters((prev) => ({
      ...prev,
      maxPrice: e.target.value,
    }));
  }

  const handleCat = (e) => {
    setFilters((prev) => ({
      ...prev,
      cat: e.target.value,
    }));
  }

  return (
    <div className="mx-auto py-2 w-6/12 p-3">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex">
          <label htmlFor="price" className="pr-2">
            Max Price
          </label>
          <input
            type="range"
            id="price"
            onChange={handlePrice}
            value={filters.maxPrice}
            max={2000}
            min={0}
          />
          <span className="p-1 ">{filters.maxPrice}</span>
        </div>

        <div className="flex justify-end">
          <label className="px-2 " htmlFor="cat">
            Categoria
          </label>
          <select
            className="outline-none rounded-sm"
            id="cat"
            onChange={handleCat}
          >
            <option value="all">Todas</option>
            <option value="laptops">Portatiles</option>
            <option value="smartphones">Moviles</option>
          </select>
        </div>
      </div>
    </div>
  );
};
