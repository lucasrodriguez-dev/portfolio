import React from 'react';
import { myProjects } from "../../data/myProjects";
import { Link } from "react-router-dom";
import { ProjectList } from './ProjectList';

export const Portfolio = () => {
  return (
    <section>
      <article id="container-portfolio">
        <h3 className="heading">Portfolio</h3>
        <ProjectList />
      </article>
    </section>
  )
}
