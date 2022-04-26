import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Search from './pages/Search';
import Carrinho from './pages/Carrinho';

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route
          exact
          path="/"
          component={ Search }
          // render={ (props) => (
          //   <Search
          //     { ...props }
          //   />
          // ) }
        />
        <Route
          exact
          path="/carrinho"
          component={Carrinho}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
