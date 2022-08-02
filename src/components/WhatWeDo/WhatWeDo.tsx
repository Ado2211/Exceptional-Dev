import React from "react";
import './WhatWeDo.scss'

const WhatWeDo = () => {
    return (
        <section className="whyToChose ">
            <img className="imgBg " src={images.bgWhy} alt="" />
            <h1 className="naslovWhy">Why to Chose Exceptional Development?</h1>
            <div className="squares">
                <div className="square" onMouseOver={handleHover} onMouseLeave={handleMouseLeave}>
                    <img className="iconsWhy" id="userFriendly" src={images.person} alt="" />
                    <h3>User Friendly</h3>
                    <p>Neki tekst ovdje treba</p>
                    <p>Neki tekst ovdje </p>
                </div>

                <div className="square" onMouseOver={handleHovers} onMouseLeave={handleMouseLeaves}>
                    <img className="iconsWhy" id="trust" src={images.handShake} alt="" />
                    <h3>Trust</h3>
                    <p>Neki tekst ovdje treba</p>
                    <p>Neki tekst ovdje </p>
                </div>

                <div className="square" onMouseOver={handleHovers1} onMouseLeave={handleMouseLeaves1}>
                    <img className="iconsWhy" id="shield" src={images.shield} alt="" />
                    <h3>Guarantee</h3>
                    <p>Neki tekst ovdje treba</p>
                    <p>Neki tekst ovdje </p>
                </div>

                <div className="square" onMouseOver={handleHovers2} onMouseLeave={handleMouseLeaves2}>
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

            <div className="aboutTrust about ">With a lot of experience and responsibility,
                <b>we are ready for the challenges</b> <br></br>
            </div>

            <div className="abouGuarantee about">With a lot of experience
            </div>

            <div className="aboutOnTime about">experience and responsibility,
            </div>

        </section>
    )
}

export default WhatWeDo;