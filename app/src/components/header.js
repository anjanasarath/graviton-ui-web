import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import Logo from '../images/logo/logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: false,
      isWideEnough: false,
    };

    this.navCollapse = this.navCollapse.bind(this);
  }

  navCollapse() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <Navbar className='gheader' fixed="top" light expand="md">
        <NavbarBrand>
          <img src={Logo} />
        </NavbarBrand>
        { !this.state.isWideEnough && <NavbarToggler onClick = { this.navCollapse } />}
        <Collapse isOpen = {this.state.collapse} navbar>
          <NavbarNav right>
            <NavItem>
              <NavLink to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup">Signup</NavLink>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
