import React from 'react';
import { myProjects } from "../../data/myProjects";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  return (
    <section>
      <article id="container-portfolio">
        <h3 className="heading">Portfolio</h3>
        <section className="projects">
          {
            myProjects.map(project => (
              <article key={project.id} className="project">
                <div className="mask">
                  <img src={`/images/${project.id}.png`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div className="overlay">
                    <p>{project.description}</p>
                  </div>
                </div>
                <span>{project.categories}</span>
                <h4>
                  <Link to={`/project/${project.id}`} className="subheading">{project.name}</Link>
                </h4>
                <ul className="technologies flex flex-row">
                  {
                    project.technologies &&
                    project.technologies.map(technologie => {
                      console.log(technologie.toLowerCase());
                      return <li key={technologie}>
                        <div style={{ width: "40px", height: "40px", overflow: "hidden" }}>
                          <img src={`/icons/${technologie.toLowerCase()}.png`} alt={technologie} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </div>
                      </li>
                    })
                  }
                </ul>

              </article>
            ))
          }
        </section>
      </article>
    </section>
  )
}
