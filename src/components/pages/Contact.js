import React from 'react';

export const Contact = () => {

  const sendMail = e => { }

  return (
    <section>
      <h3 className="heading">Contact</h3>
      <article className="container-main">
        <article className="container" id="container-contact">
          <form className="container" onSubmit={e => sendMail()}>
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <input className="button-primary" type="submit" value="Send" />
          </form>
          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/lucas-rodr%C3%ADguez-de-pena/" target="_blank">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.freelancer.uy/u/lucasrodriguez14" target="_blank">Freelancer</a>
            </li>
            <li>
              <a href="https://github.com/lucasrodriguez-dev" target="_blank">GitHub</a>
            </li>
          </ul>
        </article>
        <article>
          
        </article>
      </article>
    </section>
  )
}
