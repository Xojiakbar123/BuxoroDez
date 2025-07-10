import './Faq.css'
import { useTranslation } from 'react-i18next'
import Accordion from '../Accordion/Accordion';




export default function Faq(){

    const {t, i18n} = useTranslation();

    return(
        <div id='faq-section' className="faq">
            <div className="container">
                <h2 className="faq-title">FAQ</h2>
                <div className="accordion-bar">
                    <Accordion title={t("Zararkunandalarni yo'q qilish qanday amalga oshiriladi?")}>
                        <p>{t("Maxsus devor-uskunalar yordamida insektitsidlar aerozolli tumanga aylantiradi va qo'g'ozi, devorlar va taxta plitalari orasidagi eng kichik bo'shliklarga, ko'zga ko'rinmas hasharotlar uchun potentsial 'yashirish joylari' ga kiradi.")}</p>
                    </Accordion>
                    <hr />
                    <Accordion title={t("Siz foydalanilgan dorilar xavflilimi?")}>
                        <p>{t("Dorilar odamlar, uyvonlari va o'simliklar uchun xavfli emas. Ammo davolishdan keyingi xonani 40 daqiqada ventilyatsiya qilish kerak.")}</p>
                    </Accordion>
                    <hr />
                    <Accordion title={t("Menga uyimni davolishga tayyorlashning qandaydir usuli kerakmi?")}>
                        <p>{t("Asosan, idish-tovoq va shaxsiy gigiena vositalarini izolyatsion qilishingiz kerak. Davolash vaqtida uyvonlari ham izolyatsiya qilinishi kerak. Mebel yoki maishiy texnikani ko'rishga xojat yo'q.")}</p>
                    </Accordion>
                    <hr />
                </div>
            </div>
        </div>
    )
}