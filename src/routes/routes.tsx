import React from "react";
import { Route, Routes } from "react-router-dom";
import CardList from "../components/CardList/CardList";
import Product from "../components/Product/Product";
const routes = (
  <>
    <Routes>
      <Route path="/product/:id" element={<Product />} />
      <Route path="/" element={<CardList />} />
    </Routes>
  </>
);

export default routes;
