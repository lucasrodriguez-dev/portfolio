import React from 'react'
import { NavLink } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdLanguage } from "react-icons/md";

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
                    <MdDarkMode />
                    <MdLightMode />
                    <MdLanguage />
                </ul>
            </nav>
        </header>
    )
}
