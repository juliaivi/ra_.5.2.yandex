import React from "react";
import PropTypes from "prop-types";

/**
 * 
 * @param {*} Object 
 * @returns Выводит элемент списка блока курсов валют
 */
export default function Rates(props) {
    console.log(props)
    return (
        <li className="rate__item">
            <span className="rate__item_text">{props.text}</span>
            <span className="rate__item_num">{props.num}</span>
            <span className="rate__item_difference">{props.difference}</span>
        </li>
    )
}

Rates.propTypes = {
    props: PropTypes.object,
}