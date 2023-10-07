import React from "react";
import PropTypes from "prop-types";
import Rates from "../Retes/Rates";

/**
 * @param {Array} Array
 * @returns Выводит блок курсов валют
 */
export default function ExchangeRates({rates}) {
    return (
        <ul className="header__rates_box">
            {rates.map((rate, index) => <Rates key={index} text={rate.text} num={rate.num} difference={rate.difference} />)}
        </ul>
    )
}

ExchangeRates.propTypes = {
    rates: PropTypes.array,
}
