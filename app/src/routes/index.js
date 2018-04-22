import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import Home from '../containers/home';
import Header from '../components/header';
import Footer from '../components/footer';
import Login from '../containers/login';
import SignUp from '../containers/signUp';

const Routes = (props) => (
  <ConnectedRouter history={props.history}>
    <div>
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
      <Footer/>
    </div>
  </ConnectedRouter>
);

export default Routes;
