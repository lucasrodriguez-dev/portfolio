import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {

    const form = useRef();

    const sendMail = e => {
        e.preventDefault();
        emailjs
            .sendForm('service_sl13b3x', 'template_73d5s5e', form.current, {
                publicKey: 'Xkr_dCqh9bjqiNGDw',
            })
    }

    return (
        <article className="container" id="container-contact">
            <form ref={form} className="container" onSubmit={e => sendMail(e)}>
                <input type="text" placeholder="Name" name="from_name" />
                <input type="email" placeholder="Email" name="from_email" />
                <textarea placeholder="Message" name="message"></textarea>
                <input className="button-primary" type="submit" value="Send" />
            </form>
        </article>
    )
}
