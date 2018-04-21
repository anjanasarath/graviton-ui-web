import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import Home from '../containers/home';
import Header from '../components/header';
import Login from '../containers/login';
import SignUpPage from '../components/signUp';

const Routes = (props) => (
  <ConnectedRouter history={props.history}>
    <div>
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUpPage}/>
    </div>
  </ConnectedRouter>
);

export default Routes;
