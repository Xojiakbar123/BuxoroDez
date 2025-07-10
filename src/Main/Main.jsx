import './Main.css'
import { useTranslation } from 'react-i18next';
import mainimg from "../Main/Images/mainimg.jpg"





export default function Main(){

    const {t, i18n} = useTranslation();

    return(
        <div className="main">
            <div className="container">
                <img src={mainimg} alt="" className="main-img" />
                <div className="main-bar">
                    <img className='main-image' src="https://www.dezbuxoro.uz/assets/offical__icon-D8nN5puE.svg" alt="" />
                    <h4 className="main-title">
                        {t('Rasmiy foydalanish - 1 yil. Biz xizmat va yuridik shaxslarga xizmat kursatamiz. Xizmatlar litsenziyalangan!!!')}
                    </h4>
                    <button className="main-btn" onClick={()=>{
                                document.getElementById("contact-section").scrollIntoView({behavior: 'smooth'});
                            }}>
                        {t('Boglanish')}
                    </button>
                </div>
            </div>
        </div>
    )
}



