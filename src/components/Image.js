import React from 'react';

const Image = props => {
    const image = props.data.photo;
    const url = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
    return (
        <li className="photo-container li">
            <img src={url} alt={image.title} />
        </li>
    );
};

export default Image;