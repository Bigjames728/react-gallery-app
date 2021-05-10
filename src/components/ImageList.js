import React from 'react';
import Image from './Image';
import NotFound from './NotFound';

//This component maps the data(image), key and title for each image. It then displays those images in the photo-container div
//and dynamically adds the search term to the top of the images.

const ImageList = props => {

    const results = props.data;

    let images = results.map(image =>
        <Image data={image} key={image.id} title={image.title} />
    );

    return(
        <div>
            <h2>{props.title}</h2>
            <ul>
                {
                    (images.length > 0)
                     ? images
                     : <NotFound />
                }
            </ul>
        </div>
    );
}

export default ImageList;