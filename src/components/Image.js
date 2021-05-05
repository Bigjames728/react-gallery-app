import React from 'react';

const Image = props => {
    const image = props.data;
    const url = `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
    
    
    return (
        <li>
            <img src={url} alt={image.title} />
        </li>
    );
};

export default Image;