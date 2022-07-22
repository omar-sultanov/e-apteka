import React from "react";
import { Route, Routes } from "react-router-dom";
import CardList from "../components/CardList/CardList";
import Product from "../components/Product/Product";
import AppNav from "../components/AppNav/AppNav";
import ProductsCart from "../components/ProductsCart/ProductsCart";
import UrlError from "../components/UrlError/UrlError";

function Page(Component: any) {
  return (
    <div className="App">
      <AppNav />
      <Component />
    </div>
  );
}
const routes = () => {
  return (
    <Routes>
      <Route path="/product/:id" element={Page(Product)} />
      <Route path="/cart" element={Page(ProductsCart)} />
      <Route  path="/*" element={<UrlError/>}/>
      <Route path="/" element={Page(CardList)} />
    </Routes>
  );
};
export default routes;
