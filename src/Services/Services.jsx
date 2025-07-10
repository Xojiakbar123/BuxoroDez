import './Services.css'
import { useTranslation } from 'react-i18next'
import img1 from "../Services/Images/antivirus.png"
import img2 from "../Services/Images/antiinsect.png"
import img3 from "../Services/Images/antimice.png"




export default function Services(){
    
    const {t, i18n} = useTranslation();


    return(
        <div className="service" id='service-section'>
            <div className="container">
                <h2 className="service-title">{t('Xizmatlar')}</h2>
                <p className="service-text">{t('Biz sizga samarali va sigatli xizmat taqdim etamiz.')}</p>
                <ul className="service-list">
                    <li className="service-item">
                        <img src={img1} className='service-img' alt="" />
                        <div className="item-bar">
                            <h3 className="service-item-title">
                                {t('Dezinfeksiya - zararli mikro organizmlarni yoq qilish')}
                            </h3>
                            <p className="service-item-text">
                                {t('Har qanday dezinfektsiyaning asosiy vazifalari infektsiyalar va kasalliklarga olib kelishi mumkin bolgan xavfli mikroorganizmlarni yoq qilishdir. Dezinfeksiya choralari bu yerni mogor, virus, chiriyotgan va mikroblardan tozalaydi. Agar ozingni yoq qilish kerak, yoki sababsiz zaiflashsangiz kerak.')}
                            </p>
                        </div>
                    </li>
                    <li className="service-item">
                        <img src={img2} className='service-img' alt="" />
                        <div className="item-bar">
                            <h3 className="service-item-title">
                                {t('Dezinseksiya - xasharotlarni yoq qilish')}
                            </h3>
                            <p className="service-item-text">
                                {t('Kop odamlar birinchi navbatda "dezinfestatsiya" sozini istalmagan qoshnilaridan - choyshablar, barchamböcekler, chumolilar va boshqa hasharotlardan xalos bolish du yolini qidirganda. Ularning ozlarini yoqimsiz va ular ham malum infeksiya tashuvchilari. Dezinseksiya - bu hasharotlarni: chivinlar, chivinlar, choyshablar, tarakanlar, kuya, shomil, qobiq qongizlari, yogoch bitlari va boshqa sudralib yuruvchi va uchuvchi jonzotlarni yoq qilish.')}
                            </p>
                        </div>
                    </li>
                    <li className="service-item">
                        <img src={img3} className='service-img' alt="" />
                        <div className="item-bar">
                            <h3 className="service-item-title">
                                {t('Deratizatsiya - kemiruvchilarni yoq qilish.')}
                            </h3>
                            <p className="service-item-text">
                                {t('Toshkentda derat sifatida kamiruvchilarni yoqotishga qaratiladigan kompleks chora-tadbirlarning butun majmuasidir. aniqki, kemiruvchilar juda qatiy jonzotlar bolib, ular turli xavfli xavf-xatarlarga dosh beradilar. Shuning uchun ularni yoq qilish uchun bir panel usullardan foydalanish kerak. Derat joyda Toshkent shaharlarida kemiruvchilar paydo bolgan kop qavmli uylar, omborlar, dokonlar, umumiy ovkatlanish korxonalari amalga ochiriladi.')}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}