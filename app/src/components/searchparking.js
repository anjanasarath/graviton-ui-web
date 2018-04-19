import React from 'react';
import ReactDom from 'react-dom';
//import { Connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Autocomplete from 'react-google-autocomplete';
import Styles from '../styles/searchparking';

class SearchParking extends React.Component {
  constructor(props) {
    super();
    this.state = { value: 0 };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event, index, value) {
    this.setState({value});
  }

  render() {
    return(
      <div className="search-container">
        <div className="search-card">
          <Card expanded={true}>
            <CardHeader
              title="Find parking in seconds"
              subtitle="Choose from millions of available spaces, or reserve your space in advance. Join over 1.5 million drivers enjoying easy parking."
            />
            <CardText>
              <div>
                <Autocomplete
                  style={Styles.auto}
                  onPlaceSelected={(place) => { console.log(place); }}
                  types={['(regions)']}
                  componentRestrictions={{country: "ru"}}
                />
              </div>
              <div>
                <DropDownMenu
                  title="Space"
                  value={this.state.value}
                  onChange={this.handleChange}
                  style={Styles.dropDown.menu}
                  autoWidth={false}
                  labelStyle={Styles.dropDown.label}
                  iconStyle={Styles.dropDown.icon}
                  underlineStyle={Styles.dropDown.underline}
                >
                  <MenuItem value={0} primaryText="Space"/>
                  <MenuItem value={1} primaryText="Parking"/>
                  <MenuItem value={2} primaryText="Warehouse"/>
                </DropDownMenu>
              </div>
              <div className="horizontal">
                <RaisedButton style={Styles.rbutton} className="flex1" buttonStyle={Styles.button}>
                  Search
                </RaisedButton>
                <span>&nbsp;</span>
                <RaisedButton style={Styles.rbutton} className="flex1" buttonStyle={Styles.button}>
                  I Feel Lucky
                </RaisedButton>
              </div>
            </CardText>
          </Card>
        </div>
        <div className="flex1"></div>
      </div>
  );
}
}
export default SearchParking;
