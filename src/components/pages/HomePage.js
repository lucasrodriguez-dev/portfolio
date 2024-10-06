import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProjectList } from '../mycomponents/ProjectList';
import { Icons } from '../mycomponents/Icons';
import { LanguageContext } from '../../contexts/LanguageContext';
import { myServices } from "../../data/myServices";
import { Service } from '../mycomponents/Service';
import { ContactForm } from '../mycomponents/ContactForm';
import { Element } from 'react-scroll';

export const HomePage = () => {

  const { texts } = useContext(LanguageContext);
  const paragraphs = texts.presentation.split(". ");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <article className="container-main">
        <article className="container" id="container-presentation">
          <div id="p-presentation">
            {
              paragraphs.map(p => (
                <>
                  {p}{(p.length >= 1 && p !== " ") && (".")}
                  <br />
                </>
              ))
            }
            <br />
            <div>
              <Icons />
            </div>
          </div>
          <div id="container-me">
            <div className="blob">
              <img className="image" src={"/images/me.png"} id="image-me" />
            </div>
          </div>
        </article>
        <Element name="projects">
          <article id="container-portfolio">
            <h3 className="heading">{texts.navProjects}</h3>
            <ProjectList />
          </article>
        </Element>
        <Element name="services">
          <article id="container-services">
            <h3 className="heading">{texts.navServices}</h3>
            <ul className="flex flex-row flex-wrap services">
              {
                myServices.map(service => (
                  <li key={service.id}>
                    <Service id={service.id} />
                  </li>
                ))
              }
            </ul>
          </article>
        </Element>
        <Element name="contact" className="container">
          <article id="container-contact">
            <h3 className="heading">{texts.contact}</h3>
            <article id="container-contact-page">
              <ContactForm />
            </article>
          </article>
        </Element>
      </article>
    </section>
  )
}
