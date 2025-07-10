import './Wrapper.css'
import { useTranslation } from 'react-i18next'





export default function Wrapper(){

    const {t, i18n}= useTranslation();

    

    return(
        <div className="wrapper">
            <div className="container">
                <div className="layout">

                </div>
                <div className="texts">
                    <h1 className="wrapper-title">
                        {t('Klapa va zararli hashorot endi yoq deb hisoblang !!!')}
                    </h1>
                    <p className="wrapper-text">
                        {t('Bizning kop yillardan beri oz faoliyatini olib borayotgan kompaniyamiz. Mijozlarimiz bizdan mamnun')}
                    </p>
                    <button className="wrapper-btn" onClick={()=>{
                                document.getElementById("contact-section").scrollIntoView({behavior: 'smooth'});
                            }}>
                        {t('Boglanish')}
                    </button>
                </div>
            </div>
        </div>
    )
}