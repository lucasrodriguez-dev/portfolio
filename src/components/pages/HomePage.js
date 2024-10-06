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
          <div id="p-presentation">
            {paragraphs[0]}.
            <br />
            {paragraphs[1]}.
            <br />
            {paragraphs[2]}.
            <br /><br />
            <div>
              <Icons />
            </div>
          </div>
          <div id="container-me">
            <div className="blob">
              <img className="image" src={"/images/me.png"} id="image-me" />
            </div>
          </div>
        </article>
        <article id="container-portfolio">
          <h3 className="heading">{texts.navProjects}</h3>
          <ProjectList />
        </article>
      </article>
    </section>
  )
}
