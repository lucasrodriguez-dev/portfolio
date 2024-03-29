import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { myProjects } from '../../data/myProjects';

export const ProjectPage = () => {

    const [project, setProject] = useState({});

    const params = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        let projectId = params.id;
        let project = myProjects.filter(proj => proj.id === projectId)[0];
        setProject(project);
    }, []);

    return (
        <section>
            <article id="container-project">
                <h3 className="subheading">{project.name}</h3>
                <div className="flex flex-row" id="project-mask-technologies">
                    <div className="mask">
                        <img src={`/images/${project.id}.png`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div id="project-technologies">
                        <ul className="technologies flex flex-column">
                            {
                                project.technologies &&
                                project.technologies.map(technologie => {
                                    console.log(technologie.toLowerCase());
                                    return <li key={technologie}>
                                        <div style={{ width: "50px", height: "50px", overflow: "hidden" }}>
                                            <img src={`/icons/${technologie.toLowerCase()}.png`} alt={technologie} title={technologie} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="text-box">
                    <p>{project.description}</p>
                    <p>{project.descriptionLong}</p>
                    <p className="highlight-secondary fit-content">{project.details}</p>
                </div>
                <div className="mask">
                    <img src={`/images/${project.id}0.png`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="mask">
                    <img src={`/images/${project.id}1.png`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <a href={project.url} target="_blank" className="button-primary">See more</a>
            </article>
        </section>
    )
}
