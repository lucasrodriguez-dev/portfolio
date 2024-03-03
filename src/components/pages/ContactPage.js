import React, { useEffect } from 'react';
import { ContactForm } from '../mycomponents/ContactForm';
import { Icons } from '../mycomponents/Icons';

export const ContactPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <h3 className="heading">Contact</h3>
      <article className="container-main" id="container-contact-page">
        <ContactForm />
        <article id="container-contact-info">
          <div className="blob">
            <img src="/images/contact.png" id="image-contact" />
          </div>
          <div className="flex flex-row" id="container-contact-info-info">
            <div className="container-location">
              <div style={{ width: "30px", height: "30px", overflow: "hidden" }}>
                <img src="/icons/location.png" />
              </div>
              <p>Montevideo, Uruguay</p>
            </div>
            <div>
              <Icons />
            </div>
          </div>
        </article>
      </article>
    </section>
  )
}
