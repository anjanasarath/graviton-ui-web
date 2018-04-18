import React from 'react';
import ReactDom from 'react-dom';
//import { Connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Autocomplete from 'react-google-autocomplete';
import Styles from '../styles/searchparking';

class SearchParking extends React.Component {
  constructor(props) {
    super();
    this.state = {
                value: 0,
              }
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event, index, value) {
    this.setState({value});
  }
  render() {
    return(
    <div className="horizontal">
      <div className="flex1 backgroundBlue"></div>
      <div className="flex2 backgroundBlue">
        <h1 className="bookingHeader">Find parking in <span className="green">seconds</span></h1>
        <h4 className="maxW450 white">Choose from millions of available spaces, or reserve your space
          in advance. Join over 1.5 million drivers enjoying easy parking.</h4>
          <div>
            <Autocomplete
               style={Styles.auto}
               onPlaceSelected={(place) => {
               console.log(place);
               }}
               types={['(regions)']}
               componentRestrictions={{country: "ru"}}
           />
          </div>
          <div>
            <DropDownMenu
             title="Space"
             labelStyle={Styles.dropDownLabel}
             value={this.state.value}
             onChange={this.handleChange}
             style={Styles.dropDown}
             autoWidth={false}
           >
           <MenuItem value={0} primaryText="Space"/>
           <MenuItem value={1} primaryText="Parking"/>
           <MenuItem value={2} primaryText="Warehouse"/>
            </DropDownMenu>
          </div>
          <div className="horizontal marginTop4 maxW450">
            <RaisedButton style={Styles.rbutton} className="flex1" buttonStyle={Styles.button}>
              Search
            </RaisedButton>
            <span>&nbsp;</span>
            <RaisedButton style={Styles.rbutton} className="flex1" buttonStyle={Styles.button}>
              I Feel Lucky
            </RaisedButton>
          </div>
        </div>
      <div className="flex1"></div>
    </div>
  );
}
}
export default SearchParking;
