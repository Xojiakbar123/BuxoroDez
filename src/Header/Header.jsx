import logo from "../Header/Images/logodez.png"
import './Header.css'
import { useTranslation } from "react-i18next"
import { RiMenuFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";




export default function Header(){
    const [toogleControl, setToogleControl] = useState(true);
    const {t, i18n} = useTranslation();
    const handleChange = (event)=>{
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    }
    return(
        <div className="header">
            <div className="container">
                <ul className="header-list">
                    <li className="header-item">
                        <a href="#">
                            <img className="header-img" src={logo} alt="" />
                        </a>
                    </li>
                    <li className="header-item">
                        <a href="#" className="header-link">{t('Asosiy')}</a>
                        <a href="#about-us" className="header-link">{t('Biz xaqimizda')}</a>
                        <a href="#service-section" className="header-link">{t('Xizmatlar')}</a>
                        <a href="#faq-section" className="header-link">FAQ</a>
                        <select className="header-selector" id="" onChange={handleChange} value={i18n.language}>
                            <option value="uz">Uzbek</option>
                            <option value="en">English</option>
                            <option value="ru">Русский</option>
                        </select>
                        <button className="header-btn" onClick={()=>{
                                document.getElementById("contact-section").scrollIntoView({behavior: 'smooth'});
                            }}>{t('Boglanish')}
                            </button>
                        <nav>
                            {
                                toogleControl ? <RiMenuFill onClick={()=> setToogleControl(false)} className="menu" /> : <IoClose className="close" onClick={()=>setToogleControl(true)}/>
                            }
                        </nav>
                    </li>
                </ul>

                <div className={`mobile-menu ${toogleControl ? '' : 'active'}`}>
                    <a href="#" className=" menu-link">{t('Asosiy')}</a>
                    <a href="#about-us" className=" menu-link">{t('Biz xaqimizda')}</a>
                    <a href="#service-section" className=" menu-link">{t('Xizmatlar')}</a>
                    <a href="#faq-section" className=" menu-link">FAQ</a>
                    <select className="menu-selector" onChange={handleChange} value={i18n.language}>
                        <option value="uz">Uzbek</option>
                        <option value="en">English</option>
                        <option value="ru">Русский</option>
                    </select>
                    <button className="menu-btn" onClick={()=>{
                                document.getElementById("contact-section").scrollIntoView({behavior: 'smooth'});
                            }}>{t('Boglanish')}</button>
                </div>
            </div>
        </div>
    )
}