import React from 'react';

const Image = props => {
    const image = props.data;
    console.log(image)
    
    return (
        <li>
            <img src={image.url} alt={image.title} />
        </li>
    );
};

export default Image;