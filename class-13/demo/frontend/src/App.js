import React from 'react';
import Header from './components/Header';
import Profile from './Screens/Profile';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Welcome from './Screens/Welcome';

class App extends React.Component {

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              {isAuthenticated ? <Profile /> : <Welcome />}
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default withAuth0(App);