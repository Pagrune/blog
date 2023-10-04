import {Link} from 'react-router-dom';
import image from '../img/logo_blanc_recadre.png';

const Nav = () => {
    return (
        <nav className='menu_navigation'>
            <img className='mon_image' src={image}></img>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/news">Dernières nouvelles</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;