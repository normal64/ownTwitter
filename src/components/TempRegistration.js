import React from "react";
import "../styles/TempRegistration.scss";
import { Link, useLocation } from "react-router-dom";

const TempRegistration = () => {
    const onTempRegistrationClick = () => {
        console.log(`clicked`);
    };
    return (
        <div className="tempRegistration">
            <Link to={`/registration`}>
                <button
                    className="ui teal google button"
                    onClick={onTempRegistrationClick}
                >
                    <i className="thumbtack icon"></i>TempRegistration
        </button>
            </Link>
        </div>
    );
};

export default TempRegistration;
