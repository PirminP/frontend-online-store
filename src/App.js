import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Search from './pages/Search';

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

      </Switch>
    </BrowserRouter>
  );
}

export default App;
