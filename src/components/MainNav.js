import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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