import { Filters } from "./components/Filters";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { Footer } from "./components/footer";
import { useContext } from "react";
import { FilterContext } from "./context/filter";
import { Cart } from "./components/Cart";



function App() {

  const { filters ,setFilters } = useContext(FilterContext);
  
  return (
    <div className="bg-blue-200 w-full min-h-screen flex flex-col mx-auto p-6">
      <Header/>
      <Filters filters={filters} setFilters={setFilters}/>
      <Products filters={filters} setFilters={setFilters}/>
      <Cart/>
      <Footer/>
    </div>
  );
}

export default App;
