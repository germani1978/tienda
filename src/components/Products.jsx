/* eslint-disable react/prop-types */
import { products as productsInitial } from "../mocks/products.json";
import { Product } from "./Product";
import { useFilters } from "../hooks/useFilter";


export const Products = () => {
  const { filterProducts  } = useFilters();

  return (
    <div className="mx-auto p-3 w-6/12">
      <ul className="grid grid-cols-2 gap-4">
        {filterProducts(productsInitial)
          .slice(0, 10)
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
};
