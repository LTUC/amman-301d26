import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import HomePage from './Screens/HomePage';
import About from './Screens/About';
import Header from './components/Header';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App;