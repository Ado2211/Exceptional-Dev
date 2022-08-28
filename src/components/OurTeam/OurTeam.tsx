import React from "react";
import { Container } from "react-bootstrap";
import images from "../../assets/images";
import './OurTeam.scss';

const OurTeam = () => {
    return (
        <section className="ourTeam">
            <Container>
                <h1 className="naslovWhy">Meet Our <b> Team</b></h1>
                <div className="shapes">
                    <div className="shape"></div>
                </div>

                <section className="our-team">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                
                                <p>Bootstrap 4 our team section source code we can use it for our clients, customers, testimonials, and any types of the section where we want to describe our people who are working with us</p>
                            </div>
                        </div>

                        <div className="mb-5 mt-4">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="member">
                                        <img src={images.adnan} className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-detail">
                                                <h4>Manish Kumar</h4>
                                                <span>Web Designer</span>
                                            </div>
                                            <div className="social">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="member">
                                        <img src={images.adnan} className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-detail">
                                                <h4>Rajnish Kumar</h4>
                                                <span>Web Developer</span>
                                            </div>
                                            <div className="social">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="member">
                                        <img src={images.adnan} className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-detail">
                                                <h4>Salim Malik</h4>
                                                <span>IOS Developer</span>
                                            </div>
                                            <div className="social">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="member">
                                        <img src={images.adnan} className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-detail">
                                                <h4>Arpit Arora</h4>
                                                <span>Angular Developer</span>
                                            </div>
                                            <div className="social">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </Container >
        </section >
    )
}

export default OurTeam;