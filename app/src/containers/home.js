import React from 'react';
import ReactDom from 'react-dom';
import Header from '../components/header';
import SearchParking from '../components/searchparking';
import MultiCarouselPage from '../components/easypark';
import RentParking from '../components/rentpark';
import CarParking from '../components/carpark';
import Review from '../components/review';
import DownloadApp from '../components/downloadapp';
import GFooter from '../components/footer';


const Home = () => (
  <div className="h-100">
    <Header />
    <SearchParking />
    <MultiCarouselPage />
    <DownloadApp/>
    <RentParking/>
    <Review/>
    <CarParking/>
    <GFooter/>
  </div>
);

export default Home;
