import React, { useEffect } from 'react';

export const CurriculumPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <article id="container-cv">
        <h3 className="heading">Curriculum Vitae</h3>
        <iframe src="docs/CV.pdf" style={{width: "100%", height: "85vh"}}></iframe>
      </article>
    </section>
  )
}
