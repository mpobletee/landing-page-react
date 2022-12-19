import React from "react";
import PropTypes from "prop-types";


export const Jumbotron = (props) => {
    return (
        <div className="jumbotron m-5  text-center bg-light" id="jumbo">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">{props.description}</p>
            <a className="btn btn-primary btn-lg" href={props.buttonURL} role="button" target="_blank">{props.buttonLabel}</a>
        </div>
    )
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};