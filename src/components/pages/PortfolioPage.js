import React from 'react';
import { ProjectList } from '../mycomponents/ProjectList';

export const PortfolioPage = () => {
  return (
    <section>
      <article id="container-portfolio">
        <h3 className="heading">Portfolio</h3>
        <ProjectList />
      </article>
    </section>
  )
}
