import React from 'react';

export const Curriculum = () => {
  return (
    <section>
      <article id="container-cv">
        <h3 className="heading">Curriculum Vitae</h3>
        <iframe src="docs/CV.pdf" style={{width: "100%", height: "85vh"}}></iframe>
      </article>
    </section>
  )
}
