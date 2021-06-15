import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './sidebar.css';


const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(0);

    const getShowMenu = () => {
        return showMenu === 1 ? 'show' : '';
    }

    return (
        <Nav className="navbar shadow navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <div className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Amit Chauhan</span>
                <span className="d-none d-lg-block"><img alt="Amit Chauhan" width="500" height="500" className="img-fluid img-profile shadow rounded-circle mx-auto mb-5" src={require('../../assets/images/1623396096273.jpg')} /></span>
            </div>
            <button onClick={() => setShowMenu(!showMenu)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className={`${getShowMenu()} collapse navbar-collapse`} id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <NavLink onClick={() => setShowMenu(!showMenu)} className="shadow nav-link font-weight-bold text-uppercase" to={'about'}>About</NavLink>
                    <NavLink onClick={() => setShowMenu(!showMenu)} className="shadow nav-link font-weight-bold text-uppercase" to={'experience'}>Experience</NavLink>
                    <NavLink onClick={() => setShowMenu(!showMenu)} className="shadow nav-link font-weight-bold text-uppercase" to={'education'}>Education</NavLink>
                    <NavLink onClick={() => setShowMenu(!showMenu)} className="shadow nav-link font-weight-bold text-uppercase" to={'skills'}>Skills</NavLink>
                    <NavLink onClick={() => setShowMenu(!showMenu)} className="shadow nav-link font-weight-bold text-uppercase" to={'interests'}>Interests</NavLink>
                </ul>
            </div>
        </Nav>
    );
}

export default Sidebar;

