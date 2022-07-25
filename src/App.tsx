import React from 'react';
import { inject, observer, Provider } from "mobx-react";
import CardStore from "./stores/CardStore";
import Routers from "./routes/routes";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material";
import ProductService from "./services/ProductService";
import NetworkService from "./services/NetworkService";
import { StoresNames, ServicesNames  } from "./dictionary";
import AppStore from './stores/AppStore';


const App= ()=>{

  const endpoint ="http://77.223.99.133:8080/";
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluIiwiaWQiOjgsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYyNzI5MjAyOX0.smA9a5v47rs-oG2loD1jR5Zd5RlGqmb0XN0KWjniyKo";

  // const endpoint = process.env.REACT_APP_ENDPOINT as string;

  const cardStore = new CardStore();
  const appStore = new AppStore();

  const networkService = new NetworkService(endpoint,token);
  const productService = new ProductService(networkService, cardStore);

  console.log(appStore)
  const stores = {
    [StoresNames.CardStore]: cardStore,
    [StoresNames.AppStore]: appStore,
  };

  const services = {
    [ServicesNames.NetworkService]: networkService,
    [ServicesNames.ProductService]: productService,
  };

  return (
    <ThemeProvider theme={theme}>
        <Provider {...stores} {...services}>
          <Routers />
        </Provider>
    </ThemeProvider>
  )
}
export default App;
