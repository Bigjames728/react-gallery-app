import React from 'react';
import Image from './Image';
import NotFound from './NotFound';

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