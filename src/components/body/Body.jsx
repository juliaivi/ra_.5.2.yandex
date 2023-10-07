import React from "react";
import PropTypes from "prop-types";
import Categories from "./Categories/Categories";
import Banner from "./Banner/Banner";
import SearchForm from "./SearchForm/SearchForm";

/**
* @param {*Object} props 
 * @returns Выводит блок категорий поиска, поиск и баннер ниже поиска
 */
export default function Body(props) {
    return (
        <div className="body">
            <div className="body__search">
                <Categories categories={props.dataBody.categories}/>
                <SearchForm><span className="text">фаза луны сегодня</span></SearchForm>
                
                <Banner href={props.dataBody.banner.href} src={props.dataBody.banner.src}/>
            </div>
        </div>
    )
}

Body.propTypes = {
    dataBody: PropTypes.object,
}

