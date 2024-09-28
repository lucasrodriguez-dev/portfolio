import React from 'react';
import {BiDownload} from "react-icons/bi";
import { myIcons } from '../../data/myIcons';
import { Icon } from './Icon';

export const Icons = () => {
    return (
        <ul className="icons">
            <li>
                <div style={{ width: "50px", height: "40px", alignContent: "center", borderRadius: "3px", padding: "0 10px" }}>
                    <a title="CV" target="_blank" href="https://drive.google.com/uc?export=download&id=1uSmMwD1mVKYRGZktHf_Efcpv9vkjaPmD" download="lucasrodriguez-cv.pdf" rel="noopener noreferrer">
                        <BiDownload size={40}/>
                    </a>
                </div>
            </li>
            {
                myIcons.map(icon => (
                    <li key={icon.id}>
                        <Icon id={icon.id} />
                    </li>
                ))
            }
        </ul>
    )
}
