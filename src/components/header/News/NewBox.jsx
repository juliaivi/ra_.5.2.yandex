import NewsBlock from "../NewBlock/NewsBlock";
import NewsList from "./NewsList";
import ExchangeRates from "./ExchangeRates";
import React from "react";

export default function NewBox(props) {
    return (
        <div className="header__news_box">
            <NewsBlock  titles={props.data.titles} />
            <NewsList news={props.data.news} />
            <ExchangeRates  rates={props.data.rates} />
        </div>
    )
}