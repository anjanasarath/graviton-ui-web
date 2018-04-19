import React from 'react';
import ReactDom from 'react-dom';
import Header from '../components/header';
import SearchParking from '../components/searchparking';
import FeaturedList from '../components/featuredBooking';

const Home = () => (
  <div>
    <Header/>
    <SearchParking/>
    <FeaturedList/>
  </div>
);

export default Home;
