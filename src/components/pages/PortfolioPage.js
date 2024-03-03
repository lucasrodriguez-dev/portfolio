import React, { useEffect } from 'react';
import { ProjectList } from '../mycomponents/ProjectList';

export const PortfolioPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <article id="container-portfolio">
        <h3 className="heading">Portfolio</h3>
        <ProjectList />
      </article>
    </section>
  )
}
