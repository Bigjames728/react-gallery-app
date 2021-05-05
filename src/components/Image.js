import React from 'react';

const Image = props => {
    const image = props.data;
    
    return (
        <li className="photo-container li">
            <img src={image.url} alt={image.title} />
        </li>
    );
};

export default Image;