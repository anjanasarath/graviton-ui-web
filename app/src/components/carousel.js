import React from 'react';
import ReactDom from 'react-dom';
import { Carousel } from 'react-bootstrap';
import { CarouselItem } from 'react-bootstrap';
import Image1 from '../images/nature/B_parking01.jpg';
import Image2 from '../images/nature/B_parking03.jpg';
import Image3 from '../images/nature/B_parking06.jpg';

class ControlledCarousel extends React.Component {
  render() {
    return (
      <Carousel
        interval={3000}
        slide={true}
        indicators={true}
        controls={true}
        onSelect={this.handleSelect}
        wrap={true}
        pauseOnHover={true}
      >
        <CarouselItem><img src={Image1}></img></CarouselItem>
        <CarouselItem><img src={Image2}></img></CarouselItem>
        <CarouselItem><img src={Image3}></img></CarouselItem>
      </Carousel>
    );
  }
}

export default ControlledCarousel;
