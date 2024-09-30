import React, { useContext, useEffect } from 'react';
import { myServices } from "../../data/myServices";
import { Service } from '../mycomponents/Service';
import { LanguageContext } from '../../contexts/LanguageContext';

export const ServicesPage = () => {

  const { texts } = useContext(LanguageContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
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
    </section>
  )
}
