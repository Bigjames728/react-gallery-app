import React, { Component } from 'react';
import apiKey from './config';
import './index.css';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import ImageList from './components/ImageList';
import NotFound from './components/NotFound';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      cats: [],
      dogs: [],
      computers: [],
      title: ''
    };
  }

  

  componentDidMount() { 

    this.performSearch();
    
    // get 'cats' images and stores them in the cats array
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=cats&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          cats: response.data.photos.photo
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    // get 'dogs' images and stores them in the dogs array
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=dogs&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          dogs: response.data.photos.photo
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    // get 'computers' images and stores them in the computer array
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=computer&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          computers: response.data.photos.photo
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=24&format=json&nojsoncallback=1`)
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
      <BrowserRouter>
        <div className="container">
          
          <SearchForm onSearch={this.performSearch} />
          <MainNav />
          {/* <Results /> */}
          <div className="photo-container">
            <Switch>
              <Route exact path="/" render ={() => <Redirect to ='/Dogs' />} />
              <Route
                  exact
                  path='/cats'
                  render={() => (
                    <ImageList
                      data={this.state.cats}
                      title='Cats'
                    />
                  )}
                />
              <Route
                  exact
                  path='/dogs'
                  render={() => (
                    <ImageList 
                      data={this.state.dogs}
                      title='Dogs'
                    />
                  )}
              />
              <Route
                  exact
                  path='/computers'
                  render={() => (
                    <ImageList 
                      data={this.state.computers}
                      title='Computers'
                    />
                  )}
              />
              <Route
                  path='/search/:query'
                  render={() => (
                    <ImageList 
                      data={this.state.images}
                      title={this.state.title}
                      handleSearch={this.performSearch}
                    />
                  )}
              />
              <Route 
                  component={NotFound} />
            </Switch>
          </div>
          
          
            
          
        </div>
      </BrowserRouter>
    );
  }
}
