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
        </article>
        <article id="container-contact-info">
          <div className="blob">
            <img src="/images/contact.png" id="image-contact"/>
          </div>
          <div className="flex flex-row" id="container-contact-info-info">
            <div className="container-location">
              <div style={{ width: "30px", height: "30px", overflow: "hidden" }}>
                <img src="/icons/location.png" />
              </div>
              <p>Montevideo, Uruguay</p>
            </div>
            <div>
              <ul className="icons">
                <li>
                  <div style={{ width: "40px", height: "40px", overflow: "hidden" }}>
                    <a href="https://www.linkedin.com/in/lucas-rodr%C3%ADguez-de-pena/" target="_blank">
                      <img src={`/icons/linkedin.png`} alt="linkedin.com/in/lucas-rodríguez-de-pena/" title="LinkedIn" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </a>
                  </div>
                </li>
                <li>
                  <div style={{ width: "40px", height: "40px", overflow: "hidden" }}>
                    <a href="https://www.t.me/lucasrodriguez_dev" target="_blank">
                      <img src={`/icons/telegram.png`} alt="t.me/lucasrodriguez_dev" title="Telegram" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </a>
                  </div>
                </li>
                <li>
                  <div style={{ width: "40px", height: "40px", overflow: "hidden" }}>
                    <a href="https://github.com/lucasrodriguez-dev" target="_blank">
                      <img src={`/icons/github.png`} alt="github.com/lucasrodriguez-dev" title="GitHub" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </a>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </article>
      </article>
    </section>
  )
}
