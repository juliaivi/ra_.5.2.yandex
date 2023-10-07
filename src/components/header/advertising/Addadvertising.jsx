import React from "react";
import PropTypes from "prop-types";

/**
 * 
 * @param {Object} props 
 * @returns Выводит блок рекламы
 */
export default function AddAdvertising(props) {
    return (
        <div className="header__advertising">
            <a href={props.data.advertising.href}>
                {props.children}
                <p className="advertising__title">{props.data.advertising.title}</p>
                <div className="advertising__text">{props.data.advertising.text}</div>
            </a>
        </div>
    )
}

AddAdvertising.propTypes = {
    data: PropTypes.object,
}