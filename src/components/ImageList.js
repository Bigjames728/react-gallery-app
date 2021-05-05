import React from 'react';
import Image from './Image';

const ImageList = props => {

    const results = props.data;
    console.log(results)
    let images = results.map(image =>
        <Image data={image} key={image.id} />
    );

    return(
        <ul className="photo-container ul">
            {images}
        </ul>
    );
}

export default ImageList;