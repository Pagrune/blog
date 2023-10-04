import {Link} from 'react-router-dom';
import image_notfound from '../img/not_found.jpg';

const NotFound = () => {
    return (
        <div>
            <h1>Oops ... cette page est introuvable</h1>
            <div className='link_home_found'><Link to="/">Retourner à l'Accueil</Link></div>
            <img className='img_not_found' src={image_notfound}></img>
        </div>
    );
};

export default NotFound;