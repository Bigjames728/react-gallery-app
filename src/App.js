import React, { Component } from 'react';
import apiKey from './config';
import './index.css';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import Results from './components/Results';
import ImageList from './components/ImageList';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      loading: true
    };
  }

  

  componentDidMount() { 
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cars&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }


  render() {
    
    return (
      <div>
        
        <SearchForm />
        <MainNav />
        <Results />
        <ImageList data={this.state.images} />
          
        
      </div>
    );
  }
}
