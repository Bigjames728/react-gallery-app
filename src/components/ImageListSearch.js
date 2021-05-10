import React from 'react';
import Image from './Image';
import NotFound from './NotFound';
import { withRouter } from 'react-router-dom';

const ImageListSearch = props => {
    
    const results = props.data;

    let images = results.map(image =>
        <Image data={image} key={image.id} title={image.title} />
    );

    let value = props.match.params.query;
        
        if (props.title !== value) {
            props.handleSearch(value);
        }
        console.log(value);
        console.log(props.title);
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