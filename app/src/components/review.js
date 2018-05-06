import React from "react";
import Slider from "react-slick";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import MediaQuery from 'react-responsive';
import User1 from '../images/users/user1.jpg';
import User2 from '../images/users/user2.jpg';
import User3 from '../images/users/user3.jpg';
import User4 from '../images/users/user4.jpg';

const stars = (props) => {
  let stars = [];
  for (let i=0; i<props.rating && i<5; i++) {
    stars.push(<div key = {i} className = 'fa fa-star text-yellow'></div>);
  }
  return stars;
};

const UserReview = (props) => (
  <div className="review-section row">
    <div className="col-md-1 d-none d-md-inline">
      <img className="rounded-circle user-profile-image" src={props.image}/>
    </div>
    <div className="col-md-11 col-sm-12 pl-5 row">
      <div>
        <h6>{props.name}</h6>
        <div>{stars(props).map((star)=>star)}</div>
      </div>
      <div className='d-md-none flex-fill pl-3'>
        <img className="rounded-circle user-profile-image" src={props.image}/>
      </div>
      <div className="w-100">{props.location}</div>
      <div>{props.comments}</div>
    </div>
  </div>
);

const Review = (props) => (
  <div className='review-slider'>
    <Slider {...props.settings}>
      <div>
        <UserReview
          image={User1}
          name="Richard B"
          rating={5}
          location="Car park on High Holborn, London"
          comments="Very easy. The convenient parking made our stay all the more enjoyable. Cheaper than the train and cheaper than other car parks too. Easy booking system and pre-payment takes the stress out of finding the cash or texting to pay. We will definitely use again."
        />
      </div>
      <div>
        <UserReview
          image={User2}
          name="Marcus F"
          rating={5}
          location="Driveway on Vicarage Road, Birmingham"
          comments="Not used to reviewing parking spaces, but have to say this one was perfect! We used it as away supporters attending a Fulham game. Very convenient 10 minute walk to the ground, easy to find and a quick escape on the South Circular afterwards. Great service."
        />
      </div>
      <div>
        <UserReview
          image={User3}
          name="Gemma T"
          rating={5}
          location="Car park on Whiteladies Road, Bristol"
          comments="Simple and easy-to-use app, perfect for my commute into work. Saves on stress of having to find a space in the morning in such a difficult area to find parking. Very happy with the service, has made my journey much easier and hope to use on a regular basis."
        />
      </div>
      <div>
        <UserReview
          image={User4}
          name="Jennifer M"
          rating={5}
          location="Car park on Melton Street, London"
          comments="I used this space for a hospital appointment in London. The whole JustPark experience has been great! So easy to find and book a space - at a brilliant price too! Will definitely use again, saved us a bundle of money and stress. Thank you JustPark :-)"
        />
      </div>
    </Slider>
  </div>
);

const webSettings = {
  dots: true,
  infinite: true,
  rows: 2,
  slidesPerRow: 2,
  arrows: false,
  autoplay: false,
  accessibility: true,
  autoplaySpeed: 2500,
  variableWidth: false,
  dotsClass: 'slick-dots',
};

const mobileSettings = {
  ...webSettings,
  rows: 1,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const UserReviews = () => (
  <div className='lh-1-5 review-container justify-content-center'>
    <div className='text-center'>
      <h2 className='review-title'>Reviews</h2>
    </div>
    <MediaQuery query='(min-device-width: 80em)'>
      <Review settings={webSettings}/>
    </MediaQuery>
    <MediaQuery query='(max-device-width: 80em)'>
      <Review settings={mobileSettings}/>
    </MediaQuery>
  </div>
);

export default UserReviews;
