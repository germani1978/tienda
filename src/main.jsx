import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FilterProvider } from "./context/filter.jsx";
import { CarProvider } from "./context/cart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FilterProvider>
    <CarProvider>
      <App />
    </CarProvider>
  </FilterProvider>
);
