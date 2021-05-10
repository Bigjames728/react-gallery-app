import React from 'react';

//This component includes the url I built that the image comes from. It takes the image by using the url and displays it in
//the list element that will be inside the ul element.

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