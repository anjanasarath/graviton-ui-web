
import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import Logo from '../images/logo/logo.svg';

class FooterFace extends React.Component {
    render(){
        return(
            <Footer color="stylish-color-dark" className="font-small pt-4">
                <Container className="text-center text-md-left">
                    <Row className="text-center text-md-left mt-3 pb-3">
                        <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold"><img src={Logo} /></h6>
                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
                            <p><a href="#!">About</a></p>
                            <p><a href="#!">How it works</a></p>
                            <p><a href="#!">Help</a></p>
                            <p><a href="#!">Media</a></p>
                            <p><a href="#!">Contact Us</a></p>

                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
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
                        <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                            <p><i className="fa fa-envelope mr-3"></i> info@gmail.com</p>
                            <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="d-flex align-items-center">
                        <Col md="8" lg="8">
                            <p className="text-center text-md-left grey-text">&copy; {(new Date().getFullYear())} Copyright: <a href="https://www.justpark.com"> justpark.com </a></p>
                        </Col>
                        <Col md="4" lg="4" className="ml-lg-0">
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-facebook"></i></a></li>
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-google-plus"></i></a></li>
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Footer>
        );
    }
}

export default FooterFace;
