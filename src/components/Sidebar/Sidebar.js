import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

import './sidebar.css';


const Sidebar = () =>
{
    const [showMenu, setShowMenu] = useState(0);

    const getShowMenu = () =>
    {
        return showMenu === 1 ? 'show' : '';
    }

    return (
        <Nav id="sideNav" className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <div class="w-75 text-center" href="#page-top">
                <img height="110px" alt="Amit Chauhan" class="img-fluid img-profile shadow rounded-circle mx-auto mb-3" src={ require('../../assets/images/1623396096273.jpg') } />
                <p>Hi, my name is Amit Chauhan and I'm a Software Engineer. Welcome to my personal website!</p>
                <hr/>
                <div className="py-1 rounded social-icons">
                    <NavLink className="social-icon linkedin" target="_blank" to={{ pathname: 'https://in.linkedin.com/in/chauhanamit0810' }}><i className="fab fa-linkedin-in"></i></NavLink>
                    <NavLink className="social-icon github" target="_blank" to={{ pathname: 'https://github.com/bluesuiter' }}><i className="fab fa-github"></i></NavLink>
                    <NavLink className="social-icon twitter" target="_blank" to={{ pathname: 'https://twitter.com/chauhanamit0810' }}><i className="fab fa-twitter"></i></NavLink>
                </div>
            </div>
            <button onClick={ () => setShowMenu(!showMenu) } className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className={ `${getShowMenu()} collapse navbar-collapse` } id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <NavLink onClick={ () => setShowMenu(!showMenu) } className="shadow nav-link font-weight-bold text-uppercase" to={ 'about' }>About</NavLink>
                    <NavLink onClick={ () => setShowMenu(!showMenu) } className="shadow nav-link font-weight-bold text-uppercase" to={ 'experience' }>Professional History</NavLink>
                    <NavLink onClick={ () => setShowMenu(!showMenu) } className="shadow nav-link font-weight-bold text-uppercase" to={ 'education' }>Education</NavLink>
                    <NavLink onClick={ () => setShowMenu(!showMenu) } className="shadow nav-link font-weight-bold text-uppercase" to={ 'skills' }>Skills</NavLink>
                    <NavLink onClick={ () => setShowMenu(!showMenu) } className="shadow nav-link font-weight-bold text-uppercase" to={ 'interests' }>Interests</NavLink>
                </ul>
            </div>
        </Nav>
    );
}

export default Sidebar;
