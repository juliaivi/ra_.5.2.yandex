import React from "react";
import PropTypes from "prop-types";

/**
 * @param {*} props 
 * @returns Выводит логотип, форму поиска и пример ниже поля ввода("Найдётся всё")
 */
export default function SearchForm(props) {
    return(
        <div className="body__search">
            <form className="body__search_form">
                <div className="body__search_logo"><span className="logo letter">Я</span >ндекс</div>
                <input className="body__search_input" />
                <button className="body__search_btn">Найти</button>
            </form>
            <div className="body__search_example">
                Найдётся всё. Например,
                {props.children}
            </div>
        </div>
    )
}


SearchForm.propTypes = {
    props: PropTypes.object,
}