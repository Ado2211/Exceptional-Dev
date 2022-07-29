import React from "react";

const WhatWeDo = () => { 
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
            </section>
    )
}

export default WhatWeDo;