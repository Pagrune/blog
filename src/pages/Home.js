import React from 'react';
import Nav from '../components/Nav';
import img_fleur from '../img/fleur.png';


const Home = () => {
    return (
        // <Nav/>
        <div className='container'>
            <img className='fleur_svg' src={img_fleur}></img>
            <h1 className='homeH1'>Bienvenue sur mon site</h1>
            <p>Je me présente : Pauline GRUNEWALD</p>
            <p>Je suis étudiante en troisième année de BUT MMI à l'IUT de MULHOUSE</p>
        </div>
        
    );
};

export default Home;