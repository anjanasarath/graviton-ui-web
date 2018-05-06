import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import Autocomplete from 'react-google-autocomplete';
import { Button, Card, CardBody, CardTitle, CardText } from 'mdbreact';
import Styles from '../styles/searchparking';
import DropDown from './dropDown';

const SearchParking = () => (
  <div className="d-flex search-container gbackground">
    <div className="d-flex flex-row-reverse justify-content-center align-items-center col-sm-7 col-12">
      <Card className='search-card mr-lg-2'>
        <CardBody>
          <CardTitle className='text-white search-park-title'>Find parking in</CardTitle>
          <CardText className='text-white mobile-hidden'>
            Choose from millions of available spaces, or reserve your space in advance. Join over 1.5 million drivers enjoying easy parking.
          </CardText>
          <CardText className='text-white desktop-hidden'>
            Choose from millions of spaces. Trusted by 1.5 million drivers.
          </CardText>
          <Autocomplete
            className='search-auto-complete bg-white'
            placeholder="Where do you want to park?"
            onPlaceSelected={(place) => { console.log(place); }}
            types={['(regions)']}
            componentRestrictions={{country: "mx"}}
          />
        <div className='dropdown mt-2'>
            <span>
              <DropDown/>
            </span>
          </div>
          <div className='d-flex mt-2'>
            <div className='col-6 p-0'>
              <Button className='search-button'>Search</Button>
            </div>
            <div className='col-6 p-0'>
              <Button className='search-button float-right'>I feel lucky</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
    <div className='search-image-container col-sm-5 d-none d-sm-inline' style={Styles.dImage}>
    </div>
  </div>
);

export default SearchParking;
