import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Divider from 'muicss/lib/react/divider';
import Logo from '../images/header_logo/header_logo.svg';
import Styles from '../styles/header';
import AppBarTopButtons from './headerbuttons';

const Header = () => (
  <AppBar style={{...Styles.appBar}}
    title={<span><img src={Logo}/></span>}
    iconElementRight={<AppBarTopButtons/>}
    showMenuIconButton={false}
  />
);

export default Header;
