import React from "react";
import { Container } from "react-bootstrap";

import './Header.scss'
import Navbar from "../Navbar/Navbar";





const Header = () => {
    return (
        <section className="section header" >
           
            <Navbar></Navbar>
            <h1 className="brand ">EXCEPTIONAL</h1>
            <h2 className="dev">DEVELOPMENT</h2>
            <p className="paragraf">We offer the creation of websites, web applications and mobile applications <br></br>
                with the help of the most popular technologies and the best software solutions</p>

        </section>
    )
}

export default Header;