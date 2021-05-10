import React, { useEffect } from 'react';
import Image from './Image';
import NotFound from './NotFound';
import { withRouter } from 'react-router-dom';

const ImageListSearch = props => {
    
    const results = props.data;

    let images = results.map(image =>
        <Image data={image} key={image.id} title={image.title} />
    );

    let value = props.match.params.query;
    
    useEffect(() => {
        if (props.title !== value) {
            props.handleSearch(value);
        }
    });

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


export default withRouter(ImageListSearch);