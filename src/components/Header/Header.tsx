import React from "react";
import { Container } from "react-bootstrap";

import './Header.scss'
import Navbar from "../Navbar/Navbar";





const Header = () => {
    return (

        <section className="section header" >
            <Container>
                <Navbar></Navbar>
                <div className="naslov">
                    <div >
                        <h1 className="brand ">EXCEPTIONAL</h1>
                        <h2 className="dev">DEVELOPMENT</h2>
                        <p className="paragraf">We offer the creation of websites, web applications and mobile applications <br></br>
                            with the help of the most popular technologies and the best software solutions</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Header;