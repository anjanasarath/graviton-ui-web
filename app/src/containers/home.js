import React from 'react';
import ReactDom from 'react-dom';
import Header from '../components/header';
import SearchParking from '../components/searchparking';
import ControlledCarousel from '../components/carousel';

const Home = () => (
  <div>
    <ControlledCarousel/>
    <SearchParking/>
  </div>
);

export default Home;
