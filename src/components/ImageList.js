import React from 'react';
import Image from './Image';

const ImageList = props => {

    const results = props.data;
    console.log(results.photo)
    let images = results.map(image =>
        <Image data={image} key={image.id} />
    );

    return(
        <div className="photo-container">
            <ul>
                {images}
            </ul>
        </div>
    );
}

export default ImageList;