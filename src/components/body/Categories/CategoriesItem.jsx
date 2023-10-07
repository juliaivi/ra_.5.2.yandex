import React from "react";
import PropTypes from "prop-types";

/**
 * @param {*} Object 
 * @returns Выводит элемент блока категорий поиска
 */
export default function CategoriesItem(props) {
    return (
        <a className="search__nav_item" href={props.href} key={props.key}>{props.title}</a>
    )
}

CategoriesItem.propTypes = {
    href: PropTypes.string,
    key: PropTypes.number,
    title: PropTypes.string,
}