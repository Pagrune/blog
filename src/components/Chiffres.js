import React from 'react';
import image_chiffre from '../img/chiffres.jpg';

const Chiffres = () => {
    return (
        <div>
            Pour ce qui est des chiffres, il arrive dans la vie des moments où il vaut mieux ne pas les connaître.
            <img className='img_chiffre' src={image_chiffre}></img>
        </div>
    );
};

export default Chiffres;