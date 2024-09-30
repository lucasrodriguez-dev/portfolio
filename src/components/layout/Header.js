import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import ThemeSwitcher from '../mycomponents/ThemeSwitcher';
import LanguageSwitcher from '../mycomponents/LanguageSwitcher';
import { LanguageContext } from '../../contexts/LanguageContext';

export const Header = () => {
    const { texts } = useContext(LanguageContext);
    return (
        <header>
            <div id="container-title">
                <h1>Lucas Rodríguez</h1>
                <h2><span className="highlight">{texts.subtitle}</span></h2>
            </div>
            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink to="/">{texts.navHome}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">{texts.navServices}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">{texts.navProjects}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">{texts.navContact}</NavLink>
                    </li>
                    <li>
                        <ThemeSwitcher />
                    </li>
                    <li>
                        <LanguageSwitcher />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
