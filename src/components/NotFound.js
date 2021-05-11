import React from 'react';

//A friendly not found page to display if the route doesn't exist or if there are no images returned for the search query.

const NotFound = () => {
    return(
        <div className="not-found">
            <h2>Oops!</h2>
            <p><strong>It looks like this page doesn't exist..</strong></p>
        </div>
    );
};

export default NotFound;