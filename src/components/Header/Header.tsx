import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar/Navbar";
import './Header.scss'
import Needs from "../Needs/Needs";





const Header = () => {
    return (
        <section className="header" >
           
                <Navbar></Navbar>
                <h1 className="brand ">EXCEPTIONAL</h1>
                <h2 className="dev">DEVELOPMENT</h2>
                <p className="paragraf">We offer the creation of websites, web applications and mobile applications <br></br>
                with the help of the most popular technologies and the best software solutions</p>
            
        </section>
    )
}

export default Header;