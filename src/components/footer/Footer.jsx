import React from "react";
import PropTypes from "prop-types";
import FooterItem from "./FooterItems/FooterItems";
import FooterElement from "./FooterItems/FooterElement";

/**
 * @param {*} Object 
 * @returns Выводит нижнюю часть страници с анонсами (Погода, Посещаемое, Телепрограмма и т.д.)
 */
export default function Footer({ dataFooter }) {
    return (
        <div className="footer">
            <ul className="footer__list">
                <FooterItem title="Погода" href="#">
                    <a className="temperature" href={dataFooter.weather.href}>
                        <div className="temperature_today">
                            <img  className="temperature_today_icon" src={dataFooter.weather.src} alt="..." />
                            <div className="footer__item-numb">{dataFooter.weather.temp}&deg;</div>
                        </div>
                        <div className="temperature_daytime">
                            <p className="temperature_text">Утром<span className="num">{dataFooter.weather.morningTemp}</span></p>
                            <p className="temperature_text">Днём<span className="num">{dataFooter.weather.daytimeTemp}</span></p>
                        </div>
                    </a>
                </FooterItem>

                <FooterItem title="Посещаемое" href="#">
                    <FooterElement  data={dataFooter.visited} title='visited' />
                </FooterItem>
                
                <FooterItem title="Карта Германии" href="#">
                    <a href={dataFooter.mapOfGermany.href}>
                        <div className="footer__item-content">{dataFooter.mapOfGermany.text}</div>
                    </a>
                </FooterItem>
                <FooterItem title="Телепрограмма" href="#">
                <FooterElement  data={dataFooter.tvProgram} title='tvProgram' />
                </FooterItem>

                <FooterItem title="Эфир" href="#">
                    <FooterElement  data={dataFooter.ether} title='ether' />     
                </FooterItem>
            </ul>
        </div>
    )

}

Footer.propTypes = {
    dataFooter: PropTypes.object,
}