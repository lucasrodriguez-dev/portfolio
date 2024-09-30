import React, { useContext, useEffect } from 'react';
import { ContactForm } from '../mycomponents/ContactForm';
import { LanguageContext } from '../../contexts/LanguageContext';

export const ContactPage = () => {

  const { texts } = useContext(LanguageContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <h3 className="heading">{texts.navContact}</h3>
      <article className="container-main" id="container-contact-page">
        <ContactForm />
      </article>
    </section>
  )
}
