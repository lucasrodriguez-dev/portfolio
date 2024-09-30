import React from 'react'
import { myServices } from '../../data/myServices';
import * as SiIcons from "react-icons/si";
import * as BiIcons from "react-icons/bi";
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

const serviceMapping = {
    frontend: BiIcons.BiWindowAlt,
    backend: BiIcons.BiBulb,
    database: BiIcons.BiData,
    task: BiIcons.BiTask,
    image: BiIcons.BiImage,
    containers: BiIcons.BiLogoDocker
};

export const Service = ({ id }) => {

    const { language } = useContext(LanguageContext);

    const theService = myServices.find((s) => s.id === id);
    const ServiceIcon = serviceMapping[theService.name.en.split(" ")[0].toLowerCase()];

    return (
        <div className="service-card">
            <div className="container-service-icon" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                {ServiceIcon && <ServiceIcon size={50}/>}
            </div>
            <h4>{theService.name[language]}</h4>
            <div id="separator-p-technologie">
                <p>{theService.description[language]}</p>
                <ul className="technologies flex flex-row">
                    {
                        theService.technologies &&
                        theService.technologies.map(technologie => {
                            const iconName = `Si${technologie.charAt(0).toUpperCase()}${technologie.slice(1)}`;
                            const IconComponent = SiIcons[iconName];
                            return <li key={technologie}>
                                <div style={{ width: "35px", height: "35px", overflow: "hidden" }}>
                                    {IconComponent ? (
                                        <IconComponent size={35} title={technologie}/>
                                    ): (
                                        <span>{technologie}</span>
                                    )}
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
