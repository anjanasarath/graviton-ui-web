import React from "react";
import Slider from "react-slick";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
//@import "~slick-carousel/slick/slick.css";
//@import "~slick-carousel/slick/slick-theme.css";

export default class ParkingEasy extends React.Component {

  render() {

    const { title } = this.props;

      const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      autoplay: false,
      accessibility: true,
      autoplaySpeed: 2500,
      variableWidth: false,
      dotsClass: 'slick-dots',
    };

    const style = {
      height: '100%',
      margin: '0 auto',
      textAlign: 'center',
    };

    const mediaStyle = {
      margin: '10px 10px 10px 10px',
      borderRadius: '50%',
    };

    const caption = {
      color : "#880E4F",
    };

    return (
      <div style={style}>
        <h5 style={caption}> <i>{ title }</i> </h5>
        <Slider {...settings}>
          <div>
            <img className="easy0ne" alt="" />
          </div>
          <div>
            <img className="easytwo" alt="" />
          </div>
          <div >
            <img className="easythree" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
