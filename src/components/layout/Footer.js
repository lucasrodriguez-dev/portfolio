import React from 'react';
import { Icons } from '../mycomponents/Icons';

export const Footer = () => {
    return (
        <footer>
            <p>Lucas Rodríguez &copy; {new Date().getFullYear()}</p>
            <div>
              <Icons size={20}/>
            </div>
        </footer>
    )
}
