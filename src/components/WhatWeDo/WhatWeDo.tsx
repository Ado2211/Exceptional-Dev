import React from "react";
import './WhatWeDo.scss';
import images from "../../assets/images";
import { Container } from "react-bootstrap";

const WhatWeDo = () => {

    function handleHover() {
        let mobile = document.getElementsByClassName('mobileDev');
        let web = document.getElementsByClassName('webDev');
        let soft = document.getElementsByClassName('softwareDev');

        for (let i = 0; i < web.length; i++) {
            web[i].classList.remove('actives');
        }

        for (let i = 0; i < soft.length; i++) {
            soft[i].classList.remove('actives');
        }

        for (let i = 0; i < mobile.length; i++) {
            mobile[i].classList.add('actives');

        }

    }

    function handleHovers() {
        let about = document.getElementsByClassName('mobileDev');
        let web = document.getElementsByClassName('webDev');
        let soft = document.getElementsByClassName('softwareDev');
        let selected = document.getElementsByClassName('selected');

        for (let i = 0; i < selected.length; i++) {
            selected[i].classList.remove('selected');
        }

        for (let i = 0; i < about.length; i++) {
            about[i].classList.remove('actives');
        }

        for (let i = 0; i < soft.length; i++) {
            soft[i].classList.remove('actives');
        }

        for (let i = 0; i < web.length; i++) {
            web[i].classList.add('actives')
        }
    }



    function handleHovers1() {
        let mobile = document.getElementsByClassName('mobileDev');
        let web = document.getElementsByClassName('webDev');
        let soft = document.getElementsByClassName('softwareDev');
        let selected = document.getElementsByClassName('selected');

        for (let i = 0; i < selected.length; i++) {
            selected[i].classList.remove('selected');
        }

        for (let i = 0; i < mobile.length; i++) {
            mobile[i].classList.remove('actives');
        }

        for (let i = 0; i < web.length; i++) {
            web[i].classList.remove('actives');
        }

        for (let i = 0; i < soft.length; i++) {
            soft[i].classList.add('actives')
        }
    }



    return (
        <section className="whatWeDo" id="whatWeDo">
            <Container>
            <h1 className="naslovWhy">What <b> We do </b>?</h1>
            <div className="shapes">
                <div className="shape"></div>
            </div>
            <div className="circles">
                <div className="circle selected" onMouseOver={handleHover} >
                    <img className="img" id="userFriendly" src={images.mobileDev} alt="" />

                </div>

                <div className="circle circleCenter" onMouseOver={handleHovers} >
                    <img className="img" id="trust" src={images.webDev} alt="" />

                </div>

                <div className="circle" onMouseOver={handleHovers1} >
                    <img className="img" id="shield" src={images.software} alt="" />

                </div>


            </div>
            <div className="aboutDev">

                <div className="mobileDev abou hide actives">
                    <h3>Mobile APP Development</h3>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it <br></br>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an a galley of type and scrambled it <br></br>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an a galley of type and scrambled it
                    </p>
                </div>

                <div className="webDev abou hide">

                    <h3>Web APP Development</h3>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it <br></br>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br></br>
                        when an a galley of type and scrambled itLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an a galley of type and scrambled it
                    </p>
                </div>

                <div className="softwareDev abou hide">
                    <h3>Software Development</h3>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        <br></br>
                        Lorem Ipsum has been the industry's standard dummy when an unknown printer took a galley of type and scrambled ittext ever since the 1500s, when an a galley of type and scrambled it <br></br>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an a galley of type and scrambled it
                    </p>
                </div>


            </div>
            <div className="technologies">
                <div>The Technologies We Use</div>
            </div>
            </Container>
        </section >
    )
}

export default WhatWeDo;