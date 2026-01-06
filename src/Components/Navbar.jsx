import React from 'react';
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import './Style.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" width={'35px'} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link text-center" aria-current="page" to="/">Home</Link>
                <Link className="nav-link text-center" to="/calculator">Calculator</Link>
                
                <Link className="nav-link text-center disabled" aria-disabled="true">Coming Soon</Link>
            </div>
            </div>
            </div>
        </nav>
    </>
  );
}

export default Navbar;
