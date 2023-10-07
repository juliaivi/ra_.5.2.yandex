import React from "react";
import PropTypes from "prop-types";
import CategoriesItem from "./CategoriesItem";

/**
 * @param {*} Array 
 * @returns Выводит блок категорий поиска
 */

export default function Categories(props) {
    return (
        <nav className="search__nav">
            {props.categories.map((category, index) => <CategoriesItem key={index} href={category.href}  title={category.title} />)}
        </nav>
    )
}

Categories.propTypes = {
    categories: PropTypes.array,
}