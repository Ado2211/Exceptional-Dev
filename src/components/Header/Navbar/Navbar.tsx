import React from "react";
import { Container } from "react-bootstrap";
import './Navbar.scss'
import  logo from "../../../assets/logo.png";
import * as ReactBootStrap from "react-bootstrap";

const Navbar = () => {
    return (
        <>
            <ReactBootStrap.Navbar collapseOnSelect expand="xl" className="navbar" variant="dark"  >
                <ReactBootStrap.Navbar.Brand href="#home" > <img src={logo} className="logo" ></img></ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className=" ms-auto">
                        
                            <ReactBootStrap.Nav.Link href="#aboutUs">About Us</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="#pricing">What We Do</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="#deets">Our Team</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link  href="#memes"> Projects</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link  href="#contactUs">Contact Us</ReactBootStrap.Nav.Link>
                       
                    </ReactBootStrap.Nav>
                    
                    {/* <ReactBootStrap.NavDropdown className="collapsible" title="Contact Us" id="collapsible-nav-dropdown">
                        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Divider />
                        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown> */}

                </ReactBootStrap.Navbar.Collapse>

            </ReactBootStrap.Navbar>
        </>
    )
}

export default Navbar;