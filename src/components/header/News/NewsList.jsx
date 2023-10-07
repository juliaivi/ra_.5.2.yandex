import React from "react";
import PropTypes from "prop-types";
import NewsListItem from "./NewsListItrem";

/**
 * @param {Array} prop
 * @returns  Выводит список новостей
 */
export default function NewsList(props) {
    return (
        <ul className="header__new-list">
            {props.news.map((news, index) => 
                <NewsListItem key={index} url={news.url} title={news.title}>
                    <img src={news.src} alt="..." />
                </NewsListItem>
            )}
        </ul>
    )
}

