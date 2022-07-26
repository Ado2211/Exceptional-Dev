import React from "react";
import { Container } from "react-bootstrap";
import './WhyToChose.scss'
import images from "../../assets/images";


const WhyToChose = () => {
    return (
        <section className="whyToChose">
            <Container>
                <h1 className="naslovWhy">Why to Chose Exceptional Development?</h1>
                <div className="squares">
                    <div className="square">
                        <img className="iconsWhy" src={images.person} alt="" />
                        <h3>User Friendly</h3>
                        <p>Neki tekst</p>
                    </div>

                    <div className="square">
                        <img src="" alt="" />
                        <h3>User Friendly</h3>
                        <p>Neki tekst</p>
                    </div>

                    <div className="square">
                        <img src="" alt="" />
                        <h3>User Friendly</h3>
                        <p>Neki tekst</p>
                    </div>

                    <div className="square">
                        <img src="" alt="" />
                        <h3>User Friendly</h3>
                        <p>Neki tekst</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default WhyToChose;