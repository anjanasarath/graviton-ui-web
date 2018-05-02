import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import Logo from '../images/logo/logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };

    this.navCollapse = this.navCollapse.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
  }

  navCollapse() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  dropdownToggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Navbar className='gheader' light expand="md" scrolling>
        <NavbarBrand>
          <img src={Logo} />
        </NavbarBrand>
        { !this.state.isWideEnough && <NavbarToggler onClick = { this.navCollapse } />}
        <Collapse isOpen = {this.state.collapse} navbar>
          <NavbarNav right>
            <NavItem>
              <NavLink to="#">Help</NavLink>
            </NavItem>
            <NavItem>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.dropdownToggle}>
                <DropdownToggle nav caret>List your space</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="#">Space 1</DropdownItem>
                  <DropdownItem href="#">Space 2</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
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
