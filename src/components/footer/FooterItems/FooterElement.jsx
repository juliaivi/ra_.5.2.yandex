import React from "react";
import PropTypes from "prop-types";

/**
 * 
 * @param {*} Object 
 * @returns Выводит элемент блока нижней части страницы
 */

export default function FooterElement(props) {
    return (
        <div className={`footer__item-content ${props.title}`}>
            <ul className="footer__item-list">
                {props.data.map((el, idx) =>
                    <li key={idx} className="list__item">
                        <a className="list__item_link" href={el.href}>
                            { (props.title === 'ether')?<img className="list__item_icon" src={el.src} alt="" />: <></>}
                            { (props.title === 'visited')? <span className={`item__text item__text_${props.title}`}>{el.boldText}</span> : <></>}
                            <span className={`item__text`}> {el.text}</span>
                            { (props.title !== 'visited')? <span className={`item__text item__text_${props.title}`}>{el.grayText}</span> : <></>}
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}

FooterElement.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
}
