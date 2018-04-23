import React from "react";
import Slider from "react-slick";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Image1 from '../images/grid-list/a_park.jpg';
import Image2 from '../images/grid-list/b_park.jpg';
import Image3 from '../images/grid-list/c_park.jpg';
import Image4 from '../images/grid-list/d_park.jpg';
import Image5 from '../images/grid-list/i_park.jpg';
import Image6 from '../images/grid-list/f_park.jpg';
import Image7 from '../images/grid-list/g_park.jpg';
import Image8 from '../images/grid-list/h_park.jpg';

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
      textAlign: 'center',
    }

    const mediaStyle = {
      margin: '10px 10px 10px 10px',
    }

    const caption = {
      color : "#880E4F",
    }

    return (
      <div className="" style={style}>
        <h5 style={caption}> <i>{ title }</i> </h5>
        <Slider {...settings}>
          <div className="transparent">
            <Card expanded={true}>
              <CardMedia
                mediaStyle={mediaStyle}
                >
                <img src={Image5} alt="" />
              </CardMedia>
            </Card>
          </div>
          <div>
            <Card expanded={true}>
              <div>
                <CardMedia
                  mediaStyle={mediaStyle}
                  >
                  <img src={Image6} alt="" />
                </CardMedia>
              </div>
            </Card>
          </div>
          <div>
            <Card expanded={true}>
              <div>
                <CardMedia
                  mediaStyle={mediaStyle}
                  >
                  <img src={Image5} alt="" />
                </CardMedia>
              </div>
            </Card>
          </div>
          <div>
            <Card expanded={true}>
              <div>
                <CardMedia
                  mediaStyle={mediaStyle}
                  >
                  <img src={Image5} alt="" />
                </CardMedia>
              </div>
            </Card>
          </div>
          <div>
            <Card expanded={true}>
              <div>
                <CardMedia
                  mediaStyle={mediaStyle}
                  >
                  <img src={Image6} alt="" />
                </CardMedia>
              </div>
            </Card>
          </div>
          <div>
            <Card expanded={true}>
              <div>
                <CardMedia
                  mediaStyle={mediaStyle}
                  >
                  <img src={Image6} alt="recent1" />
                </CardMedia>
              </div>
            </Card>
          </div>
          <div>
            <Card expanded={true}>
              <div>
                <CardMedia
                  mediaStyle={mediaStyle}
                  >
                  <img src={Image5} alt="recent1" />
                </CardMedia>
              </div>
            </Card>
            </div>
            <div>
        <Card expanded={true}>
          <div>
            <CardMedia
              mediaStyle={mediaStyle}
              >
              <img src={Image6} alt="recent1" />
            </CardMedia>
          </div>
        </Card>
        </div>

      </Slider>
      </div>
    );
  }
}
