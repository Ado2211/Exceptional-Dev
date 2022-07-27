import React from "react";
import { Container } from "react-bootstrap";
import './WhyToChose.scss'
import images from "../../assets/images";

const WhyToChose = () => {
    return (
        <section className="whyToChose ">
            <img className="imgBg " src={images.bgWhy} alt="" />
            <h1 className="naslovWhy">Why to Chose Exceptional Development?</h1>
            <div className="squares">
                <div className="square">
                    <img className="iconsWhy" src={images.person} alt="" />
                    <h3>User Friendly</h3>
                    <p>Neki tekst</p>
                </div>

                <div className="square active">
                    <img className="iconsWhy" src={images.handShake} alt="" />
                    <h3>Trust</h3>
                    <p>Neki tekst</p>
                </div>

                <div className="square">
                    <img className="iconsWhy" src={images.shield} alt="" />
                    <h3>Guarantee</h3>
                    <p>Neki tekst</p>
                </div>

                <div className="square">
                    <img className="iconsWhy" src={images.time} alt="" />
                    <h3>User Friendly</h3>
                    <p>Neki tekst</p>
                </div>
            </div>

        </section>
    )
}

export default WhyToChose;