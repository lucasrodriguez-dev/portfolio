import React from 'react';
import * as SiIcons from "react-icons/si";
import { myIcons } from '../../data/myIcons';

export const Icon = ({ id, size }) => {

    const iconSize = size ? size : 40;

    const theIcon = myIcons.find((i) => i.id === id);
    const iconName = `Si${theIcon.name.charAt(0).toUpperCase()}${theIcon.name.slice(1)}`;
    const IconComponent = SiIcons[iconName];

    return (
        <div style={{ width: iconSize, height: iconSize, overflow: "hidden" }}>
            <a href={theIcon.link} target="_blank">
                {
                    IconComponent ?
                        <IconComponent size={iconSize} title={theIcon.name}/>
                    : theIcon.name
                }
            </a>
        </div>
    )
}
