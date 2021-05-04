import React, { Component } from 'react';

export default class SearchForm extends Component {
  
    render() {  
        return (
        
            <form className="search-form" >
                <input type="search"
                        name="search"
                        placeholder="Search"
                        required />
                <button type="submit" className="search-button"></button>
            </form>      
        );
    }
}
