import React from "react";
import './App.css';
import Header from './Header';
import Homepage from './Homepage';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Forum from './pages/Forum';
import Movies from './pages/Movies';
import Groups from './pages/Groups';
import Profile from './pages/Profile';

import {GlobalProvider} from './context/GlobalState';




function App() {
  return (
    <div className="app">
      <GlobalProvider>
      <Router>
        <Header />
        <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Redirect to="/home" />
             )
           }}
              />
          <Route path ='/home' component={Homepage} />
          <Route path ='/forum' component={Forum} />
          <Route path ='/movies' component={Movies} />
          <Route path ='/groups' component={Groups} />
          <Route path ='/profile' component={Profile} />
        </Switch>
      </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
