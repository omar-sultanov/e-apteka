import React from "react";
import { Provider } from "mobx-react";
import CardStore from "../../stores/CardStore";
import AppNav from "../AppNav/AppNav";
import CardList from "../CardList.tsx/CardList";
import { Route, Routes } from "react-router-dom";
import Product from "../Product/Product";
import AddProduct from "../AddProduct/AddProduct";
import About from "../About/About";
// import styles from "./App.module.scss";

const App = () => {
  return (
    <div className="container">
      <Provider CardStore={CardStore}>
        <AppNav />
        <Routes>
          <Route path="/product/:id" element={<Product />} />
          <Route path="/Home" element={<CardList />} />
          <Route path="/AddCard" element={<AddProduct />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
