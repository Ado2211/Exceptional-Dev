import React from "react";
import { Container } from "react-bootstrap";
import './WhyToChose.scss'
import images from "../../assets/images";

const WhyToChose = () => {
    function handleHover() {
            let square = document.getElementById('userFriendly');

    }

    return (
        <section className="whyToChose ">
            <img className="imgBg " src={images.bgWhy} alt="" />
            <h1 className="naslovWhy">Why to Chose Exceptional Development?</h1>
            <div className="squares">
                <div className="square">
                    <img onMouseOver={handleHover} className="iconsWhy" id="userFriendly" src={images.person} alt="" />
                    <h3>User Friendly</h3>
                    <p>Neki tekst ovdje treba</p>
                    <p>Neki tekst ovdje </p>
                </div>

                <div className="square actives">
                    <img className="iconsWhy" id="trust" src={images.handShake} alt="" />
                    <h3>Trust</h3>
                    <p>Neki tekst ovdje treba</p>
                    <p>Neki tekst ovdje </p>
                </div>

                <div className="square">
                    <img className="iconsWhy" id="shield" src={images.shield} alt="" />
                    <h3>Guarantee</h3>
                    <p>Neki tekst ovdje treba</p>
                    <p>Neki tekst ovdje </p>
                </div>

                <div className="square">
                    <img className="iconsWhy" id="onTime" src={images.time} alt="" />
                    <h3>On Time</h3>
                    <p>Neki tekst ovdje treba</p>
                    <p>Neki tekst ovdje </p>
                </div>
            </div>

            <div className="aboutUser about"><b>Exceptional development</b> is a team of young but
                experienced and responsible people in their work.<br></br>
                With a lot of experience and responsibility, <b>we are ready for the challenges</b> <br></br>
                you have for us.
            </div>

            <div className="abouTrust about active">With a lot of experience and responsibility,
                <b>we are ready for the challenges</b> <br></br>
            </div>

            <div className="abouGuarantee about">With a lot of experience
            </div>

            <div className="aboutOnTime about">experience and responsibility,
            </div>

        </section>

        
    )
}

export default WhyToChose;