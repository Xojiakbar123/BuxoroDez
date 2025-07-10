

import './Footer.css'
import { useTranslation } from 'react-i18next'
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import logo from "../Header/Images/logodez.png";



export default function Footer(){

    const {t, i18n} = useTranslation();

    return(
        <div className="footer">
            <div className="container">
                <ul className="footer-list">
                    <li className="footer-item">
                        <a href="#" className="footer-img-link">
                            <img src={logo} alt="" />
                        </a>
                    </li>
                    <li className="footer-item">
                        <a href="https://maps.app.goo.gl/Pmk7s56v9H9AEkh1A" className="footer-link">
                            <CiLocationOn className='footer-icon' />
                            {t('Ozbekistan,Buxoro shaxri')}
                        </a>
                        <a href="tel:+998940337212" className="footer-link">
                            <IoCallOutline className='footer-icon' />
                            +998 94 033 72 12
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}