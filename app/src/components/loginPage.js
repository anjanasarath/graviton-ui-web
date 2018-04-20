import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import SocialLoginButton from './multipleLogin';
import Styles from '../styles/login';
import Logo from '../images/or-divider.png';


const handleSocialLogin = (user) => {
  console.log(user)
}

const handleSocialLoginFailure = (err) => {
  console.error(err)
}

export default class LoginPage extends React.Component {
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
                   title= "Please log in to your account"
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
            <div>
              <span><img src={Logo}/></span>
            </div>
            <div>
              <CardText style={{float:'left'}}>Email Address or phone number</CardText>
              <TextField name="text" style={Styles.textfieldWidth}></TextField>
            </div>
            <div>
              <CardText style={{float:'left', marginLeft:"100px"}}>Password</CardText>
              <TextField name="text" style={Styles.textfieldWidth}></TextField>
            </div>
            <p>Forgotten your password?</p>
            <p>Don&#39;t have an account?Sign up now</p>
            <button style={Styles.footerbtn} >Log in</button>
          </Card>
        </div>
      </div>
    );
  }
}
