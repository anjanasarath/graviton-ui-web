import React from "react";
import Slider from "react-slick";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import MediaQuery from 'react-responsive';

const ParkingEasySlider = (props) => (
  <Slider {...props.settings}>
    <div>
      <img className="round-img easy0ne" alt="" />
      <h3 className='easypark-caption'>Whereever, whenever</h3>
      <div className='lh-1-5'>Choose from millions of spaces across UK</div>
      <div className='lh-1-5'>Find your best option for every car journey</div>
    </div>
    <div>
      <img className="round-img easytwo" alt="" />
      <h3 className='easypark-caption'>Peace of mind</h3>
      <div className='lh-1-5'>View information of availability, price and restrictions</div>
      <div className='lh-1-5'>Reserve in advance at over 20,000+ locations</div>
    </div>
    <div>
      <img className="round-img easythree" alt="" />
      <h3 className='easypark-caption'>Seamless experience</h3>
      <div className='lh-1-5'>Pay for JustPark spaces via the app or website</div>
      <div className='lh-1-5'>Follow easy directions and access instructions</div>
    </div>
  </Slider>
);

const webSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  autoplay: false,
  accessibility: true,
  autoplaySpeed: 2500,
  variableWidth: false,
  dotsClass: 'slick-dots',
};

const mobileSettings = {
  ...webSettings,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};

const ParkingEasy = () => (
  <div className='text-center'>
    <h2 className='easypark-title'>Parking made easy</h2>
    <MediaQuery query='(min-device-width: 40em)'>
      <ParkingEasySlider settings={webSettings}/>
    </MediaQuery>
    <MediaQuery query='(max-device-width: 40em)'>
      <ParkingEasySlider settings={mobileSettings}/>
    </MediaQuery>
  </div>
);

export default ParkingEasy;
