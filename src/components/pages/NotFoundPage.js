import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      navigate("/");
    }, 1000)
  }, []);

  return (
    <section>
      <article id="container-not-found">
        <h3 className="heading">Page not found :/</h3>
      </article>
    </section>
  )
}
