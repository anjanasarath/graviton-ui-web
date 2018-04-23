import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SocialLogin from '../components/sociallogin';
import Styles from '../styles/signUp';

const SignUp = (props) => (
  <div className="login-container">
    <div className="login-card">
      <Card expanded={true}>
        <div className="login-modal">
          <CardHeader title= "Register for an account" style={Styles.cardheader}/>
        </div>
        <div className="text-center marginTop1">
          <SocialLogin
             style={Styles.fbButton}
             provider='facebook'
             appId=''
             onLoginSuccess={props.facebookLoginSuccess}
             onLoginFailure={props.facebookLoginFailure}
          >
            Login with Facebook
          </SocialLogin>
        </div>
        <div className="text-center marginTop5">
          <SocialLogin
             style={Styles.gglButton}
             provider='google'
             appId='645958086585-9nulhpg8e3qlj8aq6a6fit839tbmv5mr.apps.googleusercontent.com'
             onLoginSuccess={props.googleLoginSuccess}
             onLoginFailure={props.googleLoginFailure}
          >
            Login with Google
          </SocialLogin>
        </div>
        <Divider style={Styles.divider}></Divider>
        <div className="row-graviton login-footer-color">
          <CardText>Takes only a few seconds</CardText>
        </div>
        <div className="login-graviton">
          <TextField name="text1" hintText="Email Address or Username" fullWidth={true}></TextField>
          <TextField name="text2" hintText="Password" fullWidth={true}></TextField>
          <div className="text-center marginBottom1 marginTop5">
            <button style={Styles.footerbtn}>Sign Up</button>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  facebookSignUpSuccess: (user) => {
    dispatch(push('/signupSuccess'));
  },
  facebooSignUpFailure: (error) => {
    dispatch(push('/signupFailure'));
  },
  googleSignUpSuccess: (user) => {
    dispatch(push('/signupSuccess'));
  },
  googleSignUpFailure: (error) => {
    dispatch(push('/signupFailure'));
  },
});

export default connect(null, mapDispatchToProps)(SignUp);
