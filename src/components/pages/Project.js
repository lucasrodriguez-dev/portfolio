import React from 'react'
import { myProjects } from '../../data/myProjects';
import { Link } from 'react-router-dom';

export const Project = ({ id }) => {

    const proj = myProjects.find(p => p.id === id);

    return (
        <>
            <div className="mask">
                <img src={`/images/${proj.id}.png`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div className="overlay">
                    <p>{proj.description}</p>
                </div>
            </div>
            <span>{proj.categories}</span>
            <h4>
                <Link to={`/project/${proj.id}`} className="subheading">{proj.name}</Link>
            </h4>
            <ul className="technologies flex flex-row">
                {
                    proj.technologies &&
                    proj.technologies.map(technologie => {
                        return <li key={technologie}>
                            <div style={{ width: "40px", height: "40px", overflow: "hidden" }}>
                                <img src={`/icons/${technologie.toLowerCase()}.png`} alt={technologie} title={technologie} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                            </div>
                        </li>
                    })
                }
            </ul>
        </>
    )
}
