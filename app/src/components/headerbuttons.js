import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import FlatButton from 'material-ui/FlatButton';
import Styles from '../styles/header';

const AppBarTopButtons = (props) => (
  <div>
      <FlatButton label="Help" labelStyle={Styles.label} style={Styles.button} />
      <span className="mui--divider-right"><FlatButton label="List your space" labelStyle={Styles.label} style={Styles.button} /></span>
      <span className="mui--divider-right"><FlatButton label="Login" onClick={props.login} labelStyle={Styles.label} style={Styles.button} />&nbsp;</span>
      <span>&nbsp;<FlatButton label="Sign Up" onClick={props.signUp} labelStyle={Styles.signup} style={Styles.button} /></span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  login: (event) => {
    dispatch(push('/login'));
  },
  signUp: (event) => {
    dispatch(push('/signup'));
  }
});

export default connect(null, mapDispatchToProps)(AppBarTopButtons);
