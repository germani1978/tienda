import { useContext, useState } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { CarContext } from "../context/cart";

export const ListCar = () => {
  const { state, addCar, removeOfCar  } = useContext(CarContext);

  return (
    <div className="barra text-white ">
      {state.map((product) => (
        <li
          key={product.id}
          className="flex flex-col items-center justify-center mb-2"
        >
          <img
            className="object-cover w-36 px-1 py-2 mx-auto"
            src={product.thumbnail}
            alt={product.title}
          />
          <p className=" text-center text-black">
            {" "}
            {product.title} - ${product.price}{" "}
          </p>
          <div className="flex justify-center items-center">
            <button
              className="px-2 py-1 m-1  text-black rounded-md"
              onClick={() => addCar(product)}
            >
              +
            </button>
            <p>{product.quantity}</p>
            <button
              className="px-2 py-1 m-1  text-black rounded-md"
              onClick={() => removeOfCar(product)}
            >
              -
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export const Cart = () => {
  const [hide, setHide] = useState(true);
  const handleBar = () => setHide(!hide);
  const { clearCar  } = useContext(CarContext);


  return (
    <>
      <div>
      <button
        className="bg-blue-300 rounded-full p-2 z-10 mx-auto m-5 fixed top-8 right-32"
        onClick={handleBar}
      >
        <CartIcon />
      </button>
      <button
        className="bg-orange-300 rounded-full p-2 z-10 mx-auto m-5 fixed top-8 right-14"
        onClick={clearCar}
      >
        <ClearCartIcon />
      </button>
      </div>

      {!hide && (
        <div>
          <aside className="fixed top-0 right-0 bottom-0 w-60 bg-black bg-opacity-60 flex flex-col items-center">
            <div className="h-28"></div>
            <ListCar />
          </aside>
          )
        </div>
      )}
    </>
  );
};
