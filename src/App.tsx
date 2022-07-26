import React, { useEffect, useState } from 'react';
import {  Provider } from "mobx-react";
import CardStore from "./stores/CardStore";
import Routers from "./routes/routes";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material";
import ProductService from "./services/ProductService";
import NetworkService from "./services/NetworkService";
import { StoresNames, ServicesNames  } from "./dictionary";
import AppStore from './stores/AppStore';
import AppService from './services/AppService';
import 'bootstrap/dist/css/bootstrap.min.css';


const App= ()=>{


  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluIiwiaWQiOjgsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYyNzI5MjAyOX0.smA9a5v47rs-oG2loD1jR5Zd5RlGqmb0XN0KWjniyKo";
  const endpoint: string = (process.env.REACT_APP_SOME_ENDPOINT as string);
 
  const cardStore = new CardStore();
  const appStore = new AppStore();

  const networkService = new NetworkService(endpoint,token);
  const productService = new ProductService(networkService, cardStore);
  const appService = new AppService(networkService,appStore)

  
  const stores = {
    [StoresNames.CardStore]: cardStore,
    [StoresNames.AppStore]: appStore,
  };

  const services = {
    [ServicesNames.NetworkService]: networkService,
    [ServicesNames.ProductService]: productService,
    [ServicesNames.AppService]: appService,
  };

  useEffect(()=>{
    services.AppService.login()

  },[])
console.log(appStore.token)
  return (
    <ThemeProvider theme={theme}>
        <Provider {...stores} {...services}>
          <Routers />
        </Provider>
    </ThemeProvider>
  )
}
export default App;
