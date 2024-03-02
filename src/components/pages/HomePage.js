import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectList } from '../mycomponents/ProjectList';

export const HomePage = () => {
  return (
    <section>
      <article className="container-main">
        <article className="container" id="container-presentation">
          <p id="p-presentation">
            <strong>Computer Engineering</strong> student, from Uruguay 🇺🇾.
            <br />
            <strong>1 year of experience</strong> working on Front-End ⭐ and Back-End 🧠.
            <br />
            <span className="highlight-secondary">Smart, serious and dedicated</span>.
          </p>
          <h3 className="subheading">Some projects</h3>
          <ProjectList limit={3} />
          <Link to="/myportfolio" className="button-primary">More of my work</Link>
        </article>
        <article>
          <div className="blob">
            <img className="image" src={"/images/me.png"} id="image-me"/>
          </div>
        </article>
      </article>
    </section>
  )
}
