import React from 'react';
import ReactDom from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Divider from 'muicss/lib/react/divider';
import Logo from '../images/header_logo.svg';
import Styles from '../styles/header';
import RightButtons from './rightButtons';


const Header = () => (
  <AppBar style={Styles.header}
    title={<span><img src={Logo}/></span>}
    iconElementRight={<RightButtons/>}
    showMenuIconButton={false}
  />
);

export default Header;
