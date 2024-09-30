import React from 'react';
import { SiReaddotcv } from "react-icons/si";
import { myIcons } from '../../data/myIcons';
import { Icon } from './Icon';

export const Icons = ({size}) => {

    const downloadWidth = size ? size : 50;
    const downloadHeight = size ? size : 40;

    return (
        <ul className="icons">
            <li>
                <div style={{ width: downloadWidth, height: downloadHeight, alignContent: "center", borderRadius: "3px", padding: "0 10px" }}>
                    <a title="CV" target="_blank" href="https://drive.google.com/uc?export=download&id=1uSmMwD1mVKYRGZktHf_Efcpv9vkjaPmD" download="lucasrodriguez-cv.pdf" rel="noopener noreferrer">
                        <SiReaddotcv size={downloadHeight}/>
                    </a>
                </div>
            </li>
            {
                myIcons.map(icon => (
                    <li key={icon.id}>
                        <Icon id={icon.id} size={size}/>
                    </li>
                ))
            }
        </ul>
    )
}
