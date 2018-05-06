import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.state = {
      value: 'Space',
      dropdownOpen: false,
    };
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
  }

  render() {
    return (
          <Dropdown isOpen = { this.state.dropdownOpen } toggle = { this.toggle } size = "lg">
            <DropdownToggle caret className="w-100 drop-toggle-btn">
            {this.state.value}
            </DropdownToggle>
            <DropdownMenu className="w-100">
              <DropdownItem header>Space</DropdownItem>
              <DropdownItem onClick={this.select}>Parking</DropdownItem>
              <DropdownItem onClick={this.select}>Warehouse</DropdownItem>
            </DropdownMenu>
          </Dropdown>
    );
  }
}
export default DropDown;
