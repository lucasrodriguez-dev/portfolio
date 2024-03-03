import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastNotification } from './ToastNotification';

export const ContactForm = () => {

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
            <form ref={form} className="container" onSubmit={e => sendMail(e)}>
                <input type="text" placeholder="Name" name="from_name" required />
                <input type="email" placeholder="Email" name="from_email" required />
                <textarea placeholder="Message" name="message" required></textarea>
                <input className="button-primary" type="submit" value="Send" />
            </form>
        </article>
    )
}
