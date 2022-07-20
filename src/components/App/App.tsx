import React from "react";
import { Provider } from "mobx-react";
import CardStore from "../../stores/CardStore";
import routes from "../../routes/routes";
import theme from "../../styles/theme";
import AppNav from "../AppNav/AppNav";
import { ThemeProvider } from "@mui/material";
import CardService from "../../services/ProductService";

const App = () => {
  enum services {
    NetworkService="NetworkService",
    CardService="CardService"
  
  }
  CardService();
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Provider CardStore={CardStore} {...services}>
          <AppNav />
          {routes}
        </Provider>
      </div>
    </ThemeProvider>
  );
};

export default App;
