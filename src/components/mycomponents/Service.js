import React from 'react'
import { myServices } from '../../data/myServices'

export const Service = ({ id }) => {

    const theService = myServices.find((s) => s.id === id);
    console.log(theService);

    return (
        <div className="service-card">
            <div className="container-service-icon">
                <img src={`icons/${theService.icon}.png`} alt={`${theService.name} icon`} title={theService.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <h4>{theService.name}</h4>
            <div id="separator-p-technologie">
                <p>{theService.description}</p>
                <ul className="technologies flex flex-row">
                    {
                        theService.technologies &&
                        theService.technologies.map(technologie => {
                            return <li key={technologie}>
                                <div style={{ width: "45px", height: "45px", overflow: "hidden" }}>
                                    <img src={`/icons/${technologie.toLowerCase()}.png`} alt={technologie} title={technologie} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
