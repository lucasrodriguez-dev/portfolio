import React from 'react'
import { myServices } from '../../data/myServices'

export const Service = ({ id }) => {

    const theService = myServices.find((s) => s.id === id);
    console.log(theService);

    return (
        <div className="service-card">
            <div style={{ width: "40px", height: "40px", overflow: "hidden" }}>
                <img src={`icons/${theService.icon}.png`} alt={`${theService.name} icon`} title={theService.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            {theService.name}
            {theService.description}
            <ul className="technologies flex flex-row">
                {
                    theService.technologies &&
                    theService.technologies.map(technologie => {
                        console.log(technologie.toLowerCase());
                        return <li key={technologie}>
                            <div style={{ width: "40px", height: "40px", overflow: "hidden" }}>
                                <img src={`/icons/${technologie.toLowerCase()}.png`} alt={technologie} title={technologie} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
