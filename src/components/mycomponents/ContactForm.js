import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastNotification } from './ToastNotification';

export const ContactForm = () => {

    const form = useRef();
    const notificationPanel = useRef();

    const sendMail = e => {
        e.preventDefault();
        console.log(notificationPanel);
        /*emailjs
            .sendForm('service_sl13b3x', 'template_73d5s5e', form.current, {
                publicKey: 'Xkr_dCqh9bjqiNGDw',
            })
            .then(() => {
                
                <ToastNotification notificationType="success"/>
            })
            .catch((error) => {
                <ToastNotification notificationType="error"/>
            })
        */
    }

    return (
        <article className="container" id="container-contact">
            <div ref={notificationPanel}></div>
            <form ref={form} className="container" onSubmit={e => sendMail(e)}>
                <input type="text" placeholder="Name" name="from_name" required/>
                <input type="email" placeholder="Email" name="from_email" required/>
                <textarea placeholder="Message" name="message" required></textarea>
                <input className="button-primary" type="submit" value="Send" />
            </form>
        </article>
    )
}
