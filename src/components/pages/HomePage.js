import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProjectList } from '../mycomponents/ProjectList';

export const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <article className="container-main">
        <article className="container" id="container-presentation">
          <div className="flex flex-row" id="container-p-me">
            <p id="p-presentation">
              <strong>Computer Engineering</strong> student, from Uruguay 🇺🇾.
              <br />
              <strong>1 year of experience</strong> working on Front-End ⭐ and Back-End 🧠.
              <br />
              <span className="highlight-secondary">Organized, analytical and dedicated.</span>
            </p>
            <article id="container-me">
              <div className="blob">
                <img className="image" src={"/images/me.png"} id="image-me" />
              </div>
            </article>
          </div>
          <h3 className="subheading">Some projects</h3>
          <ProjectList limit={3} />
          <Link to="/myportfolio" className="button-primary">More of my work</Link>
        </article>
      </article>
    </section>
  )
}
