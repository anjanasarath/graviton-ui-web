import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import Autocomplete from 'react-google-autocomplete';
import { Button, Card, CardBody, CardTitle, CardText } from 'mdbreact';

const CarParking = () => (
  <div className="carpark-container">
    <span className="d-flex flex-row-reverse align-items-center justify-content-center car-span search-span">
      <Card className='search-card mr-lg-2 carinner-span'>
        <CardBody>
          <CardTitle className='car-title'>Car park management</CardTitle>
          <CardText className='text-black-50'>
            Maximise yield from underused car parks and vacant land, or transform payments with the UK’s favourite parking app.
          </CardText>
          <span className='w-100 justify-content-center'>
            <Button className='search-button'>Learn about our solutions</Button>
          </span>
        </CardBody>
      </Card>
    </span>
  </div>
);

export default CarParking;
