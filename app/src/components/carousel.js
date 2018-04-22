import React from 'react';
import ReactDom from 'react-dom';
import { Carousel } from 'react-bootstrap';
import Image1 from '../images/nature/B_parking01.jpg';
import Image2 from '../images/nature/B_parking03.jpg';
import Image3 from '../images/nature/B_parking06.jpg';

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.styles = {
      image1 : {
        backgroundImage : "url("+Image1+")"
      },
      image2 : {
        backgroundImage : "url("+Image2+")"
      },
      image3 : {
        backgroundImage : "url("+Image3+")"
      },
    }

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
    };
  }

  handleSelect(selectedIndex) {
    this.setState({
      index: selectedIndex,
    });
  }

  render() {
    const { index } = this.state;

    return (
      <Carousel
        activeIndex={index}
        onSelect={this.handleSelect}
      >
        <Carousel.Item style={this.styles.image1}/>
        <Carousel.Item style={this.styles.image2}/>
        <Carousel.Item style={this.styles.image3}/>
      </Carousel>
    );
  }
}

export default ControlledCarousel;
