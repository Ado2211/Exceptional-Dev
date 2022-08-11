import React from "react";
import { Container, } from "react-bootstrap";
import './WhyToChose.scss'
import images from "../../assets/images";

const WhyToChose = () => {

   


    return (
        <section className="whyToChose  " id="aboutUs">
            <Container>
            <img className="imgBg " src={images.bgWhy} alt="" />
            <h1 className="naslovWhy">Why to Chose Exceptional Development?
            </h1>
            <div className="shapes">
                <div className="shape"></div>
            </div>


            <div className="squares">
                <div className="square" >
                    <img className="iconsWhy" id="userFriendly" src={images.person} alt="" />
                    <h3>User Friendly</h3>
                    <p>Neki tekst ovdje treba<br>
                    </br>Neki tekst ovdje</p>
                    
                </div>

                <div className="square" >
                    <img className="iconsWhy" id="trust" src={images.handShake} alt="" />
                    <h3>Trust</h3>
                    <p>Neki tekst ovdje treba<br>
                    </br>Neki tekst ovdje</p>
                </div>

                <div className="square" >
                    <img className="iconsWhy" id="shield" src={images.shield} alt="" />
                    <h3>Guarantee</h3>
                    <p>Neki tekst ovdje treba<br>
                    </br>Neki tekst ovdje</p>
                </div>

                <div className="square" >
                    <img className="iconsWhy" id="onTime" src={images.time} alt="" />
                    <h3>On Time</h3>
                    <p>Neki tekst ovdje treba<br>
                    </br>Neki tekst ovdje</p>
                </div>
            </div>
           
            </Container>
        </section>


    )
}

export default WhyToChose;