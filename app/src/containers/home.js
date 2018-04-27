import React from 'react';
import ReactDom from 'react-dom';
import Header from '../components/header';
import SearchParking from '../components/searchparking';
import CarouselHome from '../components/slickCarousel';
import ParkingEasy from '../components/parkingMadeEasy';
import Footer from '../components/footer';
//import ControlledCarousel from '../components/carousel';

const Home = () => (
  <div>
    <div className="cover" style={{zIndex:'-1', height:'600px'}} >
      <SearchParking/>
    </div>
    <ParkingEasy title="Parking made easy"/>
    <Footer/>
  </div>
);

export default Home;
