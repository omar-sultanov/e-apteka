import React from 'react';
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

  const endpoint: string = (process.env.REACT_APP_SOME_ENDPOINT as string);
 
  const cardStore = new CardStore();
  const appStore = new AppStore();

  const networkService = new NetworkService(endpoint,appStore.token);
  const productService = new ProductService(networkService, cardStore);
  const appService = new AppService(appStore, networkService);

  
  const stores = {
    [StoresNames.CardStore]: cardStore,
    [StoresNames.AppStore]: appStore,
  };

  const services = {
    [ServicesNames.NetworkService]: networkService,
    [ServicesNames.ProductService]: productService,
    [ServicesNames.AppService]: appService,
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
