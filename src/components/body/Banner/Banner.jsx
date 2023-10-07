import React from "react";
import PropTypes from "prop-types";

/**
 * 
 * @param {*} Object 
 * @returns Выводит изображение - багнер после поиска
 */
export default function Banner(props) {
    return (
        <a href={props.href} className="search__banner">
            <img className="search__banner_img" src={props.src} alt="..."/>
        </a>
    )
}

Banner.propTypes = {
    href: PropTypes.string,
    src: PropTypes.string,
}