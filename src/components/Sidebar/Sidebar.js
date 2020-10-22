import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './sidebar.css';


const Sidebar = () => {
    return (
        <Nav className="navbar shadow navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Amit Chauhan</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={require('../../assets/images/profile.jpg')} alt="" /></span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <NavLink className="nav-link font-weight-bold text-uppercase" to={'about'}>About</NavLink>
                    <NavLink className="nav-link font-weight-bold text-uppercase" to={'experience'}>Experience</NavLink>
                    <NavLink className="nav-link font-weight-bold text-uppercase" to={'education'}>Education</NavLink>
                    <NavLink className="nav-link font-weight-bold text-uppercase" to={'skills'}>Skills</NavLink>
                    <NavLink className="nav-link font-weight-bold text-uppercase" to={'interests'}>Interests</NavLink>
                </ul>
            </div>
        </Nav>
    );
}

export default Sidebar;

