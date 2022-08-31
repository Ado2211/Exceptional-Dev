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

                                <p>Lorem ipsum</p>
                            </div>
                        </div>

                        <div className="mb-5 mt-4">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="member">
                                        <img src={images.adnan} className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-detail">
                                                <h4>Adnan Mahmic</h4>
                                                <span>Front-end Web Developer</span>
                                            </div>
                                            <div className="social">
                                            <a href="#"><i className="bi bi-github"></i></a>
                                                <a href="#"><i className="bi bi-whatsapp"></i></a>
                                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="member">
                                        <img src={images.adnan} className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-detail">
                                                <h4>Adnan Mahmic</h4>
                                                <span>Web Designer</span>
                                            </div>
                                            <div className="social">
                                                <a href="#"><i className="bi bi-github"></i></a>
                                                <a href="#"><i className="bi bi-whatsapp"></i></a>
                                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="member">
                                        <img src={images.adnan} className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-detail">
                                                <h4>Adnan Mahmic</h4>
                                                <span>Mobile Developer</span>
                                            </div>
                                            <div className="social">
                                            <a href="#"><i className="bi bi-github"></i></a>
                                                <a href="#"><i className="bi bi-whatsapp"></i></a>
                                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6">
                                    <div className="member">
                                        <img src={images.adnan} className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-detail">
                                                <h4>Adnan Mahmic</h4>
                                                <span>IOS Developer</span>
                                            </div>
                                            <div className="social">
                                            <a href="#"><i className="bi bi-github"></i></a>
                                                <a href="#"><i className="bi bi-whatsapp"></i></a>
                                                <a href="#"><i className="bi bi-linkedin"></i></a>
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