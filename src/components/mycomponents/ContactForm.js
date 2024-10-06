import React, { useContext, useRef, useState } from 'react';
import { ToastNotification } from './ToastNotification';
import { LanguageContext } from '../../contexts/LanguageContext';

export const ContactForm = () => {

    const { texts } = useContext(LanguageContext);

    const [emailStatus, setEmailStatus] = useState(null);
    const [show, setShow] = useState(true);
    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();
        window.Email.send({
            SecureToken: "6c9491f2-839e-4f47-8de4-18ca0ae1962d",
            Host: "smtp.elasticemail.com",
            Username: "lucascsrodriguez@gmail.com",
            Password: "266D18BD3A223F3E458DB0CAA3E654A79AD7",
            To: "lucasrodriguezdepena@gmail.com",
            From: "lucasrodriguezdepena@gmail.com",
            Subject: "Portfolio - Nuevo mensaje",
            Body: `Nombre: ${form.current["from_name"].value} <br> Mensaje: ${form.current["message"].value}`,
        }).then(
            message => alert(message)
            //showNotification(200)
        ).catch(error => console.log(error) /*showNotification(404)*/)
    }

    const showNotification = (status) => {
        setEmailStatus(status);
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, 3500);
    }

    return (
        <article className="container" id="container-contact-form">
            {
                (emailStatus && show) && (
                    <ToastNotification status={emailStatus} />
                )
            }
            <form ref={form} className="container" onSubmit={e => sendMail(e)}>
                <input type="text" placeholder={texts.formName} name="from_name" id="name_input" required />
                <input type="email" placeholder={texts.formEmail} name="from_email" id="email_input" required />
                <textarea placeholder={texts.formMessage} name="message" id="message_input" required></textarea>
                <input className="button-primary" type="submit" id="submit_input" value={texts.formPrimaryButton} />
            </form>
        </article>
    )
}
