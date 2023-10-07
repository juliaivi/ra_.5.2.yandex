import React from "react";
import PropTypes from "prop-types";
import NewBox from "./header/News/NewBox";
import AddAdvertising from "./header/advertising/Addadvertising";


/**
 * 
 * @param {Object} props 
 * @returns Выводит шапку страницы (новостной блок и блок анонса)
 */
export default function Header({ dataHeader }) {
    return (
        <header className="header">
            <NewBox data={dataHeader} />
            <AddAdvertising data={dataHeader}>
                <img className="advertising__img" src={dataHeader.advertising.src} alt="..."/>
            </AddAdvertising>
        </header>
    )
}

Header.propTypes = {
    dataHeader: PropTypes.object,
  }