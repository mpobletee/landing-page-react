import React from "react";
import PropTypes from "prop-types";


export const Carta = (props) => {
    return (

        <div className="col-3">
            <div className="card text-center">
                <img src={props.source} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
                </div>
            </div>
        </div >

    )
};

Carta.propTypes = {
    source: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonUrl: PropTypes.string
};