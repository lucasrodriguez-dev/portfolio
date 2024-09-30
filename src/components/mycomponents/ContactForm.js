import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastNotification } from './ToastNotification';
import { LanguageContext } from '../../contexts/LanguageContext';

export const ContactForm = () => {

    const { texts } = useContext(LanguageContext);

    const [emailStatus, setEmailStatus] = useState(null);
    const [show, setShow] = useState(true);
    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_sl13b3x', 'template_73d5s5e', form.current, {
                publicKey: 'Xkr_dCqh9bjqiNGDw',
            })
            .then(() => { 
                showNotification(200);
            })
            .catch((error) => { 
                console.log(error);
                showNotification(404);
            })
    }

    const showNotification = (status) => {
        setEmailStatus(status);
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, 3500);
    }

    return (
        <article className="container" id="container-contact">
            {
                (emailStatus && show) && (
                    <ToastNotification status={emailStatus} />
                )
            }
            <form ref={form} className="container-small" onSubmit={e => sendMail(e)}>
                <input type="text" placeholder={texts.formName} name="from_name" required />
                <input type="email" placeholder={texts.formEmail} name="from_email" required />
                <textarea placeholder={texts.formMessage} name="message" required></textarea>
                <input className="button-primary" type="submit" value={texts.formPrimaryButton} />
            </form>
        </article>
    )
}
