import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import SocialLoginButton from './sociallogin';
import Styles from '../styles/signin';

const handleSocialLogin = (user) => {
  console.log(user)
}

const handleSocialLoginFailure = (err) => {
  console.error(err)
}

export default class SignUpPage extends React.Component {
  constructor(props){
  super(props);
  this.state = {};
  //this.handleSocialLogin = this.handleSocialLogin.bind(this);
  //this.handleSocialLoginFailure =  this.handleSocialLoginFailure.bind(this);
}
  render() {
    return(
      <div className="search-container">
        <div className="search-card">
          <Card  expanded={true}>
            <CardHeader
              title= "Register for an account"
            />
            <div>
              <SocialLoginButton
               style={Styles.fbButton}
               provider='facebook'
               appId='YOUR_APP_ID'
               onLoginSuccess={handleSocialLogin}
               onLoginFailure={handleSocialLoginFailure}
              >
                Login with Facebook
              </SocialLoginButton>
            </div>
            <div>
              <SocialLoginButton
               style={Styles.gglButton}
               provider='google'
               appId='YOUR_APP_ID'
               onLoginSuccess={handleSocialLogin}
               onLoginFailure={handleSocialLoginFailure}
              >
                Login with Google
              </SocialLoginButton>
            </div>
            <p>Takes only a few seconds</p>
            <div>
              <CardText>Email Address or phone number</CardText>
              <TextField></TextField>
            </div>
            <div>
              <CardText>Password</CardText>
              <TextField></TextField>
            </div>
            <div>
              <button style={Styles.footerbtn}>Log in</button>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
