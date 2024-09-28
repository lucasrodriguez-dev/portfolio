import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { myProjects } from '../../data/myProjects';
import * as SiIcons from "react-icons/si";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export const ProjectPage = () => {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

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
                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container">
                            <div className="embla__slide"><img src={`/images/${project.id}.png`} /></div>
                            <div className="embla__slide"><img src={`/images/${project.id}0.png`} /></div>
                            <div className="embla__slide"><img src={`/images/${project.id}1.png`} /></div>
                        </div>
                    </div>
                    <div id="project-technologies">
                        <ul className="technologies flex flex-column">
                            {
                                project.technologies &&
                                project.technologies.map(technologie => {
                                    const iconName = `Si${technologie.charAt(0).toUpperCase()}${technologie.slice(1)}`;
                                    const IconComponent = SiIcons[iconName];
                                    return <li key={technologie}>
                                        {
                                            IconComponent ? <IconComponent size={50} title={technologie} />
                                                : <span>{technologie}</span>
                                        }
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
                <a href={project.url} target="_blank" className="button-secondary">See Code</a>
                {
                    project.tryUrl !== "" && <a href={project.tryUrl} target="_blank" className="button-primary" style={{marginLeft: "30px"}}>Try it</a>
                }
            </article>
        </section>
    )
}
