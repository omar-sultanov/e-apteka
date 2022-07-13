import React from "react";
import { Provider } from "mobx-react";
import CardStore from "../../stores/CardStore";
import AppNav from "../AppNav/AppNav";
import CardList from "../CardList.tsx/CardList";
import { Route, Routes } from "react-router-dom";
import Product from "../Product/Product";
// import styles from "./App.module.scss";

const App = () => {
  return (
    <div className="container">
      <Provider CardStore={CardStore}>
        <AppNav />
        <Routes>
          <Route path="/product/:id" element={<Product />} />
          <Route path="/" element={<CardList />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
