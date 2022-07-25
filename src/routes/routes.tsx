import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CardList from "../components/CardList/CardList";
import Product from "../components/Product/Product";
import AppNav from "../components/AppNav/AppNav";
import ProductsCart from "../components/ProductsCart/ProductsCart";
import UrlError from "../components/UrlError/UrlError";
import SignForm from '../components/SignForm/SignForm'

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
    <Router>
      <Routes>
        <Route path="/product/:id" element={Page(Product)} />
        <Route path="/cart" element={Page(ProductsCart)} />
        <Route path="/auth" element={Page(SignForm)} />
        <Route path="/" element={Page(CardList)} />
        <Route path="/*" element={<UrlError />} />
      </Routes>
    </Router>
  );
};
export default routes;
