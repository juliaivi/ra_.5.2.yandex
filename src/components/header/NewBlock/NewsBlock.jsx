import React from "react";
import PropTypes from "prop-types";
import getMonth from "../date/getMonth";
import getWeekDay from "../date/getWeekDay";
/**
 * @param {Array}
 * @returns Выводит заголовки новостного блока по категориям и дату
 */
export default function NewsBlock(props) {
    let now = new Date().toLocaleTimeString().slice(0,-3);//22:00
    return (
        <div className="header__news__category_box">
            <nav className="header__news_categoty">
                {props.titles.map((el, index) => 
                    <a href={el.url} className="header__news" key={index}>
                        <h4 className="widget__title">{el.title}</h4>
                    </a>
                )}
            </nav>
            <p className="header_news_date">
                {[new Date().getDate(), ' ', getMonth(), ',', ' ', getWeekDay(), ' ', now]}
            </p>  
        </div>
    )
}

NewsBlock.propTypes = {
    titles: PropTypes.array,
}