import React from "react";
import PropTypes from "prop-types";


export const Foot = (props) => {
    return (
        <footer className="footer bg-dark">
            <div className="container text-center">
                <span className="text-muted ">{props.copy}</span>
            </div>
        </footer>
    )
}

Foot.propTypes = {
    copy: PropTypes.string
}