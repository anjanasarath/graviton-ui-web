import React from 'react';
import ReactDom from 'react-dom';
import { Redirect } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Styles from '../styles/header';

class RightButtons extends  React.Component {
  constructor(props){
    super(props);
    this.state = {
      loginSuccess : false,
    },
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    this.setState({
      loginSuccess: true,
    });
    console.log(this.state.loginSuccess);
  }
  render() {
    return (
      <div>
          { this.state.loginSuccess && <Redirect to='/login' push/> }
          <FlatButton label="Help" labelStyle={Styles.label} style={Styles.button} />
          <span className="mui--divider-right"><FlatButton label="List your space" labelStyle={Styles.label} style={Styles.button} /></span>
          <span className="mui--divider-right"><FlatButton label="Login" onClick={this.handleLogin} labelStyle={Styles.label} style={Styles.button} />&nbsp;</span>
          <span>&nbsp;<FlatButton label="Sign Up" labelStyle={Styles.signup} style={Styles.button} /></span>
      </div>
    );
  }
}
export default RightButtons;
