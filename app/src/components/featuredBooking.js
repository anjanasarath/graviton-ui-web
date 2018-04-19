import React from "react";
import Slider from "react-slick";
import { baseUrl } from "config";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
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

export default class FeaturedList extends React.Component {

  render() {

      const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };

    const stylwer = {
      width: '80%',
      height: '100%',
      marginLeft: '100px',
      zIndex:'2000',
      background: 'grey',
    }

    const mediaStyll = {

    }

    return (
      <div style={stylwer}>
        <h3> Featured </h3>
        <Slider {...settings}>
          <div>
            <Card expanded={true}>
              <CardHeader
                title="Hi"
                subtitle="Welcome"
              />
              <CardMedia
                overlay={<CardTitle title="image1" subtitle="place1" />}
                mediaStyle={mediaStyll}
                >
                <img src={Image1} alt="recent1" />
              </CardMedia>
            </Card>
          </div>
          <div>
            <Card expanded={true}>
              <div>
                <CardMedia
                  overlay={<CardTitle title="image2" subtitle="place1" />}
                  mediaStyle={mediaStyll}
                  >
                  <img src={Image2} alt="recent1" />
                </CardMedia>
              </div>
            </Card>
          </div>
          <div>
            <Card expanded={true}>
              <div>
                <CardMedia
                  overlay={<CardTitle title="image3" subtitle="place1" />}
                  mediaStyle={mediaStyll}
                  >
                  <img src={Image3} alt="recent1" />
                </CardMedia>
              </div>
            </Card>
          </div>
          <div>
            <Card expanded={true}>
              <div>
                <CardMedia
                  overlay={<CardTitle title="image4" subtitle="place1" />}
                  mediaStyle={mediaStyll}
                  >
                  <img src={Image4} alt="recent1" />
                </CardMedia>
              </div>
            </Card>
          </div>
          <div>
            <Card expanded={true}>
              <div>
                <CardMedia
                  overlay={<CardTitle title="image5" subtitle="place1" />}
                  mediaStyle={mediaStyll}
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
                  overlay={<CardTitle title="image6" subtitle="place1" />}
                  mediaStyle={mediaStyll}
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
                  overlay={<CardTitle title="image7" subtitle="place1" />}
                  mediaStyle={mediaStyll}
                  >
                  <img src={Image7} alt="recent1" />
                </CardMedia>
              </div>
            </Card>
            </div>
            <div>
        <Card expanded={true}>
          <div>
            <CardMedia
              overlay={<CardTitle title="image8" subtitle="place1" />}
              mediaStyle={mediaStyll}
              >
              <img src={Image8} alt="recent1" />
            </CardMedia>
          </div>
        </Card>
        </div>

      </Slider>
      </div>
    );
  }
}
