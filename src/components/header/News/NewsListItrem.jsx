import React from "react";
import PropTypes from "prop-types";

/**
 * 
 * @param {Object} props 
 * @returns Выводит элемент списка новостей
 */
export default function NewsListItem(props) {
    return (
        <li className="header_news_item" key={props.key}>
            {props.children}
            <a href={props.url}>{props.title}</a>
        </li>
    )
}

NewsListItem.propTypes ={
    key: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
}