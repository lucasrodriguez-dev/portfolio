import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProjectList } from '../mycomponents/ProjectList';
import { Icons } from '../mycomponents/Icons';
import { LanguageContext } from '../../contexts/LanguageContext';

export const HomePage = () => {

  const { texts } = useContext(LanguageContext);
  const paragraphs = texts.presentation.split(".");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <article className="container-main">
        <article className="container" id="container-presentation">
          <div className="flex flex-row" id="container-p-me">
            <p id="p-presentation">
              {paragraphs[0]}.
              <br />
              {paragraphs[1]}.
              <br />
              {paragraphs[2]}.
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
          <h3 className="subheading">{texts.homeProjects}</h3>
          <ProjectList limit={3} />
          <Link to="/projects" className="button-primary">{texts.homePrimaryButton}</Link>
        </article>
      </article>
    </section>
  )
}
