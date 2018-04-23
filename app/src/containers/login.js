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
import Styles from '../styles/login';

const Login = (props) => (
  <div className="login-container">
    <div className="login-card">
      <Card expanded={true}>
        <div className="login-modal">
          <CardHeader title= "Please log in to your account" style={Styles.cardheader}/>
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
        <div className="login-graviton">
          <TextField name="text1" hintText="Email Address or Username" fullWidth={true}></TextField>
          <TextField name="text2" hintText="Password" fullWidth={true}></TextField>
          <div className="text-center">
            <button style={Styles.footerbtn}>Log In</button>
          </div>
        </div>
        <Divider style={Styles.divider}></Divider>
        <div className="row-graviton login-footer-color">
          <CardText>Forgotten your password?</CardText>
          <CardText>Don&#39;t have an account? <Link to='/signup'><i>SignUp</i></Link> Now</CardText>
        </div>
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
