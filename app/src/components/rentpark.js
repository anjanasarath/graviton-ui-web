import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import Autocomplete from 'react-google-autocomplete';
import { Button, Card, CardBody, CardTitle, CardText } from 'mdbreact';

const RentParking = () => (
  <div className="rentpark-container">
    <span className="d-flex flex-row-reverse align-items-center justify-content-center rent-span search-span">
      <Card className='search-card mr-lg-2 rentinner-span'>
        <CardBody>
          <CardTitle className='rent-title'>Rent out your parking space</CardTitle>
          <CardText className='gtext-white-50'>
            Make easy money by renting out your parking space. It‘s free to list and only takes a few minutes to get up and running.
          </CardText>
          <span className='w-100 justify-content-center'>
            <Button className='search-button'>Learn how to earn today</Button>
          </span>
        </CardBody>
      </Card>
    </span>
  </div>
);

export default RentParking;
