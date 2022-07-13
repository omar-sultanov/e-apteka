
import React from 'react';
import { Provider } from 'mobx-react';
import AppStore from './stores/AppStore'
import Typography from '@mui/material/Typography';
import styles from "./styles/app.module.scss";
import AppNav from "./components/AppNav/AppNav"
import CardList from './components/CardList.tsx/CardList';

const App = () => {
  return (
    <div className="container">
      <Provider AppStore={AppStore}>
        <AppNav/>
        <CardList/>
      </Provider>
    </div>
  );
};

export default App;
