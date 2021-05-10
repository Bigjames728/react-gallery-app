import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//This component builds the navigational buttons at the top of my app. I then just import MainNav where I'd like it to be in app.js via a route.

export default class MainNav extends Component {
  
    render() {  
        return (
        
            <nav className="main-nav">
                <ul>
                    <li>
                        <Link to="/cats">Cats</Link>
                    </li>
                    <li>
                        <Link to="/dogs">Dogs</Link>
                    </li>
                    <li>
                        <Link to="/computers">Computers</Link>
                    </li>
                </ul>
            </nav>  
        );
    }
}