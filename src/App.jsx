
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import User from "./components/Dashboard/User.Jsx";
import Revenue from "./components/Dashboard/Revenue.Jsx";
import Cards from "./components/Dashboard/Cards.Jsx";
import Products from "./components/Dashboard/Products.Jsx";
import Wishlist from "./components/Dashboard/Wishlist.Jsx";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex">
          <div className="col-auto">
            <Sidebar/>
          </div>
          <div className="w-100">
            <Navbar/>
          <div>
            <Routes>
              <Route path="/" element={<Dashboard/>}></Route>
              <Route path="/user" element={<User/>}></Route>
              <Route path="/revenue" element={<Revenue/>}></Route>
              <Route path="/cards" element={<Cards/>}></Route>
              <Route path="/products" element={<Products/>}></Route>
              <Route path="/wishlists" element={<Wishlist/>}></Route>
            </Routes>
          </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;


