import React, { useEffect } from 'react'

export const NotFoundPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <article id="container-not-found">
        <h3 className="heading">Page not found :/</h3>
      </article>
    </section>
  )
}
