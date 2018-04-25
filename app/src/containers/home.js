import React from 'react';
import ReactDom from 'react-dom';
import Header from '../components/header';
import SearchParking from '../components/searchparking';
import CarouselHome from '../components/slickCarousel';
import ControlledCarousel from '../components/carousel';

const Home = () => (
  <div>
    <ControlledCarousel/>
    <SearchParking/>
    <CarouselHome title="Featured Booking"/>
    <CarouselHome title="Recently Booked"/>
  </div>
);

export default Home;
