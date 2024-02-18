import React from 'react'
import { myProjects } from '../../data/myProjects';
import { Link } from 'react-router-dom';
import { Project } from './Project';

export const ProjectList = ({limit}) => {
    return (
        <section className="projects">
            {
                myProjects.slice(0, limit).map(project => (
                    <article key={project.id} className="project">
                        <Project id={project.id}/>
                    </article>
                ))
            }
        </section>
    )
}
