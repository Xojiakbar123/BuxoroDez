import './Section.css'
import { useTranslation } from 'react-i18next'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { PiMedalDuotone } from "react-icons/pi";
import { MdOutlineHandshake } from "react-icons/md";






export default function Section(){

    const {t, i18n}= useTranslation();


    return(
        <div className="section" id='about-us'>
            <div className="container">
                <h3 className="section-title">
                    {t('Biz xaqimizda')}
                </h3>
                <hr />
                <ul className="section-list">
                    <li className="section-item">
                        <AiOutlineThunderbolt className='section-icon'/>
                        <h2 className="item-title">{t('Tezkor Xizmat Korsatish')}</h2>
                        <p className="item-text">
                            {t('ARIZALAR KUNIGA 24 SOAT QABUL QILINADI. AGAR MUAMMO SHOSILINCH BOlsa, BIZ DARHOL KETISHIMIZ MUMKIN. SHU BILAN BIRGA, SIFAT MUKAMMAL BOLIB KOLADI.')}
                        </p>
                    </li>
                    <li className="section-item">
                        <PiMedalDuotone className='section-icon'  />
                        <h2 className="item-title">{t('Yetuk Mutaxasislarimiz')}</h2>
                        <p className="item-text">
                            {t('BIZNING HODIMLARIMIZ HAMMA NARSAGA GAMXORLIK QILADI: HISOB-KITOBLAR, XONANI TAYYoRLash, QAYTA ISHLASH, YAKUNIY TOZALASH, VENTILYATSIYA VA NAZORAT TEKSHIRUVI.')}
                        </p>
                    </li>
                    <li className="section-item">
                        <MdOutlineHandshake className='section-icon' />
                        <h2 className="item-title">{t('Sizga Maqul Vaqtda')}</h2>
                        <p className="item-text">
                            {t('SIZ OZINGIZ UCHUN MAQUL VA QULAY VAQTNI TALANG VA BIZGA MUROJAT QILING. SIZGA KAFOLATLANGAN VA SAMARALI NATIJANI OLIB BORAMIZ.')}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}