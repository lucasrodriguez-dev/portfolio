import React from 'react';
import { myServices } from "../../data/myServices";
import { Service } from './Service';

export const Services = () => {
  return (
    <section>
      <article id="container-services">
        <h3 className="heading">Services</h3>
        <ul className="flex flex-row flex-wrap">
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
