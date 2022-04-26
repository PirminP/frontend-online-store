import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
function App() {
  return (
    <div>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Search
                  { ...props }
                />
                )}
            />
          </Switch>
        </main>
      </div>
  );
}

export default App;
