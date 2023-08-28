import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import Search from './pages/Search';
import Carrinho from './pages/Carrinho';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="app-header">
          <h2><Link to="/">Frontend Online Store</Link></h2>
          <nav className="app-header-nav">
            <Link to="/">Início</Link>
            <hr />
            <Link to="/carrinho">Carrinho</Link>
          </nav>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (
              <Search
                { ...props }
              />
            ) }
          />
          <Route
            exact
            path="/carrinho"
            render={ (props) => <Carrinho { ...props } /> }
          />
          <Route
            exact
            path="/product-details/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
