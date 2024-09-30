import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProjectList } from '../mycomponents/ProjectList';
import { Icons } from '../mycomponents/Icons';

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
              <strong>Computer Engineering</strong> student from Montevideo, Uruguay 🇺🇾.
              <br />
              <strong>1 year of experience</strong> working on Front-End and Back-End 🚀.
              <br />
              <span id="highlight-text">Organized, analytical and dedicated.</span>
              <br /><br />
              <div>
                <Icons />
              </div>
            </p>
            <article id="container-me">
              <div className="blob">
                <img className="image" src={"/images/me.png"} id="image-me" />
              </div>
            </article>
          </div>
          <h3 className="subheading">Some projects</h3>
          <ProjectList limit={3} />
          <Link to="/projects" className="button-primary">See more</Link>
        </article>
      </article>
    </section>
  )
}
