import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SocialLogin from '../components/sociallogin';
import Styles from '../styles/login';

const Login = (props) => (
  <div className="search-container">
    <div className="search-card">
      <Card  expanded={true}>
        <CardHeader title= "Please log in to your account" />
        <div>
          <SocialLogin
             style={Styles.fbButton}
             provider='facebook'
             appId='363335277517391'
             onLoginSuccess={props.facebookLoginSuccess}
             onLoginFailure={props.facebookLoginFailure}
          >
            Login with Facebook
          </SocialLogin>
        </div>
        <div>
          <SocialLogin
             style={Styles.gglButton}
             provider='google'
             appId='684337754926-vtbc2bg5rpdbmethh36s7oi5hhvb7rrv.apps.googleusercontent.com'
             onLoginSuccess={props.googleLoginSuccess}
             onLoginFailure={props.googleLoginFailure}
          >
            Login with Google
          </SocialLogin>
        </div>
        <div>
          <CardText style={{float:'left'}}>Email Address or phone number</CardText>
          <TextField name="text1" style={Styles.textfieldWidth}></TextField>
        </div>
        <div>
          <CardText style={{float:'left', marginLeft:"100px"}}>Password</CardText>
          <TextField name="text2" style={Styles.textfieldWidth}></TextField>
        </div>
        <p>Forgotten your password?</p>
        <p>Don&#39;t have an account?Sign up now</p>
        <button style={Styles.footerbtn} >Log in</button>
      </Card>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  facebookLoginSuccess: (user) => {
    dispatch(push('/loginSuccess'));
  },
  facebookLoginFailure: (error) => {
    dispatch(push('/loginFailure'));
  },
  googleLoginSuccess: (user) => {
    dispatch(push('/loginSuccess'));
  },
  googleLoginFailure: (error) => {
    dispatch(push('/loginFailure'));
  },
});

export default connect(null, mapDispatchToProps)(Login);
