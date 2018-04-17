import React from 'react';
import ReactDom from 'react-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'muicss/lib/react/divider';
import Logo from '../images/header_logo.svg';
import Styles from '../styles/header';

const rightButtons = (
  <div>
      <FlatButton label="Help" labelStyle={Styles.label} style={Styles.button} />
      <span className="mui--divider-right"><FlatButton label="List your space" labelStyle={Styles.label} style={Styles.button} /></span>
      <span className="mui--divider-right"><FlatButton label="Login" labelStyle={Styles.label} style={Styles.button} />&nbsp;</span>
      <span>&nbsp;<FlatButton label="Sign Up" labelStyle={Styles.signup} style={Styles.button} /></span>
  </div>
);

const Header = () => (
  <AppBar style={Styles.header}
    title={<span><img src={Logo}/></span>}
    iconElementRight={rightButtons}
    showMenuIconButton={false}
  />
);

export default Header;
