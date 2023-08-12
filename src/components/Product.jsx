/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { CarContext } from "../context/cart";


export function Product({ product }) {

    const [added, setAdded] = useState(false);

    const { addCar,removeOfCar }= useContext(CarContext);
    
    const handleAddProduct = () => {
      added ? removeOfCar(product) : addCar(product)
      setAdded(!added)
    };
  
    return (
      <li className="h-60 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center">
        <img
          className="max-h-36  px-1 py-2 mx-auto mb-2"
          src={product.thumbnail}
          alt={product.title}
        />
        <p className=" text-center font-bold">
          {product.title} - ${product.price}{" "}
        </p>
        <button className="p-1 mb-1" onClick={handleAddProduct}>
          { added ? <RemoveFromCartIcon/>  :<AddToCartIcon />}
        </button>
      </li>
    );
  }