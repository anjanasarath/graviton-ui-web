import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Styles from '../styles/footer';

const languages = [
  'English',
  'Spanish',
  'Chineese',
  ];
  const currencies = [
  'Mexico Peso',
  'USD',
  'Renminibi'
  ];

  const style = {
    divider: {
      margin: '50px 100px 0px 100px',

      background: '#fff',
    },
  }

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valuesLang : [],
      valuesCurr : [],
    };
       this.handleChangeLang = this.handleChangeLang.bind(this);
       this.handleChangeCurr = this.handleChangeCurr.bind(this);
    }

  handleChangeLang(event, index, valuesLang) {
     this.setState({valuesLang});
   }

  handleChangeCurr(event, index, valuesCurr) {
    this.setState({valuesCurr});
  }

  menuItemsLang(valuesLang) {
    return languages.map((lang) => (
      <MenuItem
        key={lang}
        insetChildren={true}
        checked={valuesLang && valuesLang.indexOf(lang) > -1}
        value={lang}
        primaryText={lang}
      />
    ));
  }

  menuItemsCurr(valuesCurr) {
    return currencies.map((curr) => (
      <MenuItem
        key={curr}
        insetChildren={true}
        checked={valuesCurr && valuesCurr.indexOf(curr) > -1}
        value={curr}
        primaryText={curr}

      />
    ));
  }


  render() {
             const {valuesLang, valuesCurr} = this.state;
    return(
      <div style={{background:'#BDBDBD'}}>
        <div style={{height:'30px'}}></div>
          <div className="footer horizontal">
            <div className="flex1 text-center">
              <SelectField
                labelStyle={{color:'#fff'}}
                multiple={false}
                hintStyle={{color:"#fff"}}
                hintText="Select Language"
                value={valuesLang}
                onChange={this.handleChangeLang}
              >
                {this.menuItemsLang(valuesLang)}
              </SelectField>
              <SelectField
                labelStyle={{color:'#fff'}}
                multiple={false}
                hintStyle={{color:"#fff"}}
                hintText="Select Currency"
                value={valuesCurr}
                onChange={this.handleChangeCurr}
              >
                {this.menuItemsCurr(valuesCurr)}
              </SelectField>
            </div>
              <div className="flex1 text-center">
              <Subheader style={Styles.subheader}>COMPANY</Subheader>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Host Guarantee</p>
              <p>Guest Refund</p>
              <p>Copyright Policy</p>
              <p>Consent Disagree</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </div>
            <div className="flex1 text-center">
              <Subheader style={Styles.subheader}>DISCOVER</Subheader>
              <p>Travel Credit</p>
              <p>Trust & Safety</p>
            </div>
            <div className="flex1 text-center">
              <Subheader style={Styles.subheader}>HOSTING</Subheader>
              <p>Why Host</p>
              <p>Hospitality</p>
            </div>
          </div>
        </div>
        );
      }
    }
