import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import { Home } from '../components/pages/Home';
import { Portfolio } from '../components/pages/Portfolio';
import { Contact } from '../components/pages/Contact';
import { Services } from '../components/pages/Services';
import { Curriculum } from '../components/pages/Curriculum';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { NotFound } from '../components/pages/NotFound';
import { ProjectPage } from '../components/pages/ProjectPage';

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            {/* CONTENT */}
            <section className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/cv" element={<Curriculum />} />
                    <Route path="/project/:id" element={<ProjectPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </section>
            <Footer />
        </BrowserRouter>
    );
}
