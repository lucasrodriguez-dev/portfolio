import React from 'react'
import { myProjects } from '../../data/myProjects';
import { Link } from 'react-router-dom';
import * as SiIcons from "react-icons/si";

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
                        const iconName = `Si${technologie.charAt(0).toUpperCase()}${technologie.slice(1)}`;
                        const IconComponent = SiIcons[iconName];
                        return <li key={technologie}>
                            {
                                IconComponent ? <IconComponent size={25} title={technologie}/>
                                : <span>{technologie}</span>
                            }
                        </li>
                    })
                }
            </ul>
        </>
    )
}
