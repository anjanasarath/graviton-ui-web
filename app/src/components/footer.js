import React from 'react';
import { Col, Footer } from 'mdbreact';
import Logo from '../images/logo/footer_logo.svg';
import MediaQuery from 'react-responsive';

class GFooter extends React.Component {
    render(){
        return(
            <Footer color="stylish-color-dark" className="font-small pt-4 m-t-0">
              <div className="text-center text-md-left">
                <MediaQuery query='(min-device-width: 40em)'>
                  <div className="d-flex flex-wrap gtext-left text-md-left mt-3 pb-3">
                    <Col xs='12' md="3" lg="3" xl="3">
                      <img src={Logo} />
                    </Col>
                    <hr className="w-100 clearfix d-md-none"/>
                    <Col xs='12' md="3" lg="3" xl="3">
                        <p><a href="#!">About</a></p>
                        <p><a href="#!">How it works</a></p>
                        <p><a href="#!">Help</a></p>
                        <p><a href="#!">Media</a></p>
                        <p><a href="#!">Contact Us</a></p>
                    </Col>
                    <hr className="w-100 clearfix d-md-none"/>
                    <Col xs='12' md="3" lg="3" xl="3">
                        <p><a href="#!">Cashless parking solution</a></p>
                        <p><a href="#!">Car park management</a></p>
                        <p><a href="#!">Hotel car parks</a></p>
                        <p><a href="#!">Rent out your driveway</a></p>
                        <p><a href="#!">Airport parking</a></p>
                        <p><a href="#!">Stadium parking</a></p>
                        <p><a href="#!">Station parking</a></p>
                        <p><a href="#!">City parking</a></p>
                    </Col>
                    <hr className="w-100 clearfix d-md-none"/>
                    <Col xs='12' md="3" lg="3" xl="3">
                        <h6 className="text-uppercase mb-4">Contact</h6>
                        <p><i className="fa fa-home"></i> New York, NY 10012, US</p>
                        <p><i className="fa fa-envelope"></i> info@gmail.com</p>
                        <p><i className="fa fa-phone"></i> + 01 234 567 88</p>
                        <p><i className="fa fa-print"></i> + 01 234 567 89</p>
                    </Col>
                  </div>
                  <hr/>
                  <div className="d-flex gtext-left text-center flex-wrap align-items-center">
                    <Col xs='12' md="3">
                        <p className="grey-text">&copy; Copyright <a href="https://www.justpark.com"> JustPark 2017 </a></p>
                    </Col>
                    <Col xs='12' md="2">
                        <p className="grey-text">Site map</p>
                    </Col>
                    <Col xs='12' md="2">
                        <p className="grey-text">Cancellation policy</p>
                    </Col>
                    <Col xs='12' md="2">
                        <p className="grey-text">Terms of use</p>
                    </Col>
                    <Col xs='12' md="3">
                        <p className="grey-text">Where is ParkatmyHouse?</p>
                    </Col>
                  </div>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 40em)'>
                  <div className="d-flex flex-wrap mt-3 pb-3">
                    <Col xs='12' md="3" lg="3" xl="3">
                      <img src={Logo} />
                    </Col>
                    <hr className="w-100 clearfix d-md-none"/>
                    <Col xs='12' md="3" lg="3" xl="3">
                        <p><a href="#!">How it works</a></p>
                        <p><a href="#!">Help</a></p>
                        <p><a href="#!">jobs</a></p>
                        <p><a href="#!">Blog</a></p>
                        <p><a href="#!">Cancellation Policy</a></p>
                        <p><a href="#!">Contact Us</a></p>
                        <p><a href="#!">Airport parking</a></p>
                        <p><a href="#!">Stadium parking</a></p>
                        <p><a href="#!">Station parking</a></p>
                        <p><a href="#!">City parking</a></p>
                      </Col>
                    </div>
                  <hr/>
                </MediaQuery>
              </div>
            </Footer>
          );
        }
      }

export default GFooter;
