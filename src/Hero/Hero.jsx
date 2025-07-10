import './Hero.css'
import { useTranslation } from 'react-i18next';

import img1 from "../Hero/Images/klapa.jpg"
import img2 from "../Hero/Images/tarakan.jpg"
import img3 from "../Hero/Images/chayon.jpg"
import img4 from "../Hero/Images/sichqon.jpg"
import img5 from "../Hero/Images/burga.jpg"





export default function Hero(){
    const {t, i18n} = useTranslation();

    let cards = [
        {
        title: "KLAPALAR",
        text: "Ular to‘shakda, yumshoq mebelda, to‘qimachilikda, eshik romlari va deraza romlari ostida yashaydilar. Ular odamlar va issiq qonlilarning qoni bilan oziqlashadi. Allergiya va og‘ir psixolik noqulaylikni qo‘zg‘atish...",
        img: img1,
    },
    {
        title: "TARAKANLAR",
        text: "Ular patogenlarni olib yuradilar. Ular yoriqlarda, taglik tagida, mebel orasida, hammom ostida, shkaflar ostida va hokazolarda yashaydilar. Ular o‘shiq-ovqat, maishiy chiqindilar, charm buyumlar va qog‘oz bilan oziqlanadi.",
        img: img2,
    },
    {
        title: "CHAYON",
        text: "Hasharotlar va araxnidlar bilan o‘zlashtiriladigan issiqlikni yaxshi ko‘radigan jonzotlar. Ular omborlarda va uylarda yashashlari mumkin, lekin ko‘p hollarda yog‘och binolarda topiladi ...",
        img: img3,
    },
    {
        title: "KEMIRUVCHILAR",
        text: "Eng keng tarqalgan kalamushlar va sichqonlar. Ular patogenlarni olib yuradi, barcha sirtlarda ishlaydi, devor va shiftlarda o‘tish joylarini yaratadi, strukturani ishonchsizlashtiradi. Ular o‘shiq-ovqat va maishiy chiqindilar bilan oziqlanadi...",
        img: img4,
    },
    {
        title: "BURGALAR",
        text: "Ular uy hayvonlari tanasiga kirib, qushlardan ko‘chib ketishadi. Ular yumshoq mebellar, to‘rpa-tushaklar, gilamlar, yumshoq o‘yinchoqlar, taglik tagida va deraza va eshik romlarida yashaydilar. Ular odamlar va hayvonlarning qoni bilan oziqlanadilar. Ular kasalliklarga olib keladi ...",
        img: img5,
    }
    ];


    return(
        <div className="hero">
            <div className="container">
                <h2 className="hero-title">
                    {t('Xizmat turi')}
                </h2>
                <div className="hero-body">
                    {cards.map((card, index)=>(
                        <div className="hero-card" key={index} img={card.img} title={card.title} text={card.text}>
                            <h3 className="card-title">
                                {t(card.title)}
                            </h3>
                            <p className="card-text">
                                {t(card.text)}
                            </p>
                            <div className="card-bar">
                                <div>
                                    <button className="card-btn" onClick={()=>{
                                document.getElementById("contact-section").scrollIntoView({behavior: 'smooth'});
                            }}>
                                        {t('Boglanish')}
                                    </button>
                                </div>
                                <img src={card.img} alt="" className="card-img" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}