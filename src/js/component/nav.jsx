import React from "react";
import PropTypes from "prop-types";


export const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ps-3 pe-3">
            <div className="container-fluid">
                <a className="navbar-brand" href={props.logoLink} target="_blank">{props.logo}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">About</a>
                        <a className="nav-link" href="#">Services</a>
                        <a className="nav-link" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );};

NavBar.propTypes = {
    logo: PropTypes.node,
    logoLink: PropTypes.string

}


