import React, { useContext, useEffect } from 'react';
import { ProjectList } from '../mycomponents/ProjectList';
import { LanguageContext } from '../../contexts/LanguageContext';

export const PortfolioPage = () => {

  const { texts } = useContext(LanguageContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <article id="container-portfolio">
        <h3 className="heading">{texts.navProjects}</h3>
        <ProjectList />
      </article>
    </section>
  )
}
