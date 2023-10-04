import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import url from '../img/about_us.jpg';

const About = () => {
    return (
        <div>
            <Header title="A propos de nous" description="Lorem ipsum" url={url}/>

            <div className='container'>
                <h2>Nous découvrir</h2>
                <div className='flex categorie'>
                    <Link to="nos-missions">Nos missions</Link>
                    <Link to="nos-valeurs">Nos valeurs</Link>
                    <Link to="nos-chiffres">Nos chiffres</Link>
                    
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default About;