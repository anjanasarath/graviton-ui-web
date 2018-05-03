import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import Autocomplete from 'react-google-autocomplete';
import { Button, Card, CardBody, CardTitle, CardText } from 'mdbreact';

const SearchParking = () => (
  <div className="search-container">
    <span className="d-flex flex-row-reverse justify-content-center align-items-center search-span">
      <Card className='search-card gm-t-12 mr-lg-2'>
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
          <div className='mt-3'>
            <span className='w-50 btn-group justify-content-center'>
              <Button className='search-button'>Search</Button>
            </span>
            <span className='w-50 btn-group justify-content-center'>
              <Button className='search-button'>I feel lucky</Button>
            </span>
          </div>
        </CardBody>
      </Card>
    </span>
  </div>
);

export default SearchParking;
