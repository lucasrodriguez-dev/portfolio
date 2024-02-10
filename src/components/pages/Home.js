import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <section>
      <article className="container-main">
        <article className="container" id="container-presentation">
          <p>
            <span id="p-presentation">Hey there! I am a <strong>Computer Engineering</strong> student, from Uruguay 🇺🇾.</span>
          </p>
          <p>
            I have <strong>1 year of experience</strong> working on Front-End ⭐ and Back-End 🧠.
            <br />
            I really like learning new technologies and I can adapt to them easily.
            <br />
            People who know me consider me <span className="highlight">smart, serious and dedicated</span>. 
          </p>
          <Link to="/portfolio" className="button-primary">Look at my work</Link>
        </article>
        <article>
          <img className="image" src={"/images/me.png"} />
        </article>
      </article>
    </section>
  )
}
