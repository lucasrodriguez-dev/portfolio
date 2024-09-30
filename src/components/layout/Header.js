import React from 'react'
import { NavLink } from 'react-router-dom';
import { MdLanguage } from "react-icons/md";
import ThemeSwitcher from '../mycomponents/ThemeSwitcher';

export const Header = () => {
    return (
        <header>
            <div id="container-title">
                <h1>Lucas Rodríguez</h1>
                <h2><span className="highlight">Software Developer</span></h2>
            </div>
            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <ThemeSwitcher />
                    <MdLanguage />
                </ul>
            </nav>
        </header>
    )
}
