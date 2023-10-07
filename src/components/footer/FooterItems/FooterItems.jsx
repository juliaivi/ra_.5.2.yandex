import React from "react";
import PropTypes from "prop-types";

/**
 * 
 * @param {*} Object 
 * @returns Выводит элемент блока нижней части страницы
 */

export default function FooterItem(props) {
    return (
        <li className="footer__item">
            <a href={props.href}>
               <h3 className="temperature_text_title">{props.title}</h3>  
            </a>
            {props.children}
        </li>
    )
}

FooterItem.propTypes = {
    title: PropTypes.string,
    href: PropTypes.string,
}