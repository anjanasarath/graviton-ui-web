import React from "react";
import Slider from "react-slick";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Image1 from '../images/parking.jpg';

//@import "~slick-carousel/slick/slick.css";
//@import "~slick-carousel/slick/slick-theme.css";

export default class CarouselHome extends React.Component {

  render() {

    const { title } = this.props;

      const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      autoplay: true,
      accessibility: true,
      autoplaySpeed: 2500,
      variableWidth: false,
      dotsClass: 'slick-dots',
    };

    const style = {
      width: '80%',
      height: '100%',
      margin: 'auto',
    }

    const mediaStyle = {
      margin: '10px 10px 10px 10px',
    }

    const caption = {
      color : "#880E4F",
    }

    return (
      <div style={style}>
        <h5 style={caption}> <i>{ title }</i> </h5>
        <Slider {...settings}>
          <div>
            <img src={Image1} alt="" />
          </div>
          <div>
            <img src={Image1} alt="" />
          </div>
          <div >
            <img src={Image1} alt="" />
          </div>
          <div >
            <img src={Image1} alt="" />
          </div>
          <div >
            <img src={Image1} alt="" />
          </div>
          <div>
            <img src={Image1} alt="" />
          </div>
          <div>
            <img src={Image1} alt="" />
          </div>
      </Slider>
      </div>
    );
  }
}
