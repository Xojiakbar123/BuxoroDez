

import './Contact.css'
import { useTranslation } from 'react-i18next'
import axios from 'axios';
import SuccesModal from '../SuccesModal/SuccesModel';
import { useState } from 'react';




export default function Contact(){

    const {t, i18n} = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const SendMessage = (event)=>{
        event.preventDefault();
    const token = "7569147949:AAH8nAUUuf5b8TqEbQu2SZ_OBNr2UlzPyoI";
    const chat_id = 7439893038;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = document.getElementById("contact-name").value;
    const number = document.getElementById("contact-number").value;

    const message = `👤 Ismi: ${name}\n📞 Raqami: ${number}`;


    axios({
        url:url,
        method: 'POST',
        data:{
            "chat_id":chat_id,
            "text" :message,
        }
    }).then((res)=>{
        document.getElementById("contact-form").reset();
        setIsModalOpen(true);
    }).catch((error)=>{
        console.log("Error with sending!", error);
    });



    }

    return(
        <div className="contact" id='contact-section'>
            <div className="container">
                <div className="contact-card">
                    <h2 className="contact-title">
                        {t('Malumotingizni qoldiring')}
                    </h2>
                    <form  id='contact-form' onSubmit={SendMessage}>
                        <input type="text" required id='contact-name' placeholder={t('Ismingiz')} />
                        <input type="number" required id='contact-number' placeholder='+998-90-123-45-67' />
                        <button className="contact-btn" type='submit'>{t('Yuborish')}</button>
                    </form>
                </div>
            </div>
            <SuccesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}