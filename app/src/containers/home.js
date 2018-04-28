import React from 'react';
import ReactDom from 'react-dom';
import Header from '../components/header';
import SearchParking from '../components/searchparking';
import MultiCarouselPage from '../components/easypark';

const Home = () => (
  <div className="h-100">
    <Header />
    <SearchParking />
    <MultiCarouselPage />
  </div>
);

export default Home;
