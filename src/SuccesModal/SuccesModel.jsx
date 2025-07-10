import './SuccesModel.css';
import { useTranslation } from 'react-i18next';

export default function SuccesModal({ isOpen, onClose }) {

    const {t, i18n} = useTranslation();

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
        <div className="modal-box">
            <h3>✅ {t('So‘rov muvaffaqiyatli yuborildi!')}</h3>
            <p>{t('Tez orada siz bilan bog‘lanamiz.')}</p>
            <button onClick={onClose} className="modal-close">{t('Yopish')}</button>
        </div>
        </div>
    );
}
