import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Button } from 'mdbreact';
import Logo from '../images/logo/logo.svg';
import { logout } from '../actions';

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
            { !this.props.authenticated &&
              <NavItem>
                <NavLink to="/login">Login</NavLink>
              </NavItem>
            }
            { this.props.authenticated &&
              <NavItem>
                <span>{this.props.user.firstName} &nbsp; {this.props.user.lastName}</span>
              </NavItem>
            }
            { this.props.authenticated &&
              <NavItem>
                <Button color="primary" onClick={this.props.logout}>Log Out</Button>
              </NavItem>
            }
            <NavItem>
              <NavLink to="/signup">Signup</NavLink>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => (
  {
    authenticated: state.session.authenticated,
    user: state.session.user,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    logout: (event) => {
      dispatch(logout());
    }
  }
);

export default connect(mapStateToProps,mapDispatchToProps)(Header);
