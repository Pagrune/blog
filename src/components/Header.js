import React from 'react';

const Header = ({title, description, url}) => {
    return (
        <div className='header' style={{ backgroundImage: `url(${url})` }}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Header;