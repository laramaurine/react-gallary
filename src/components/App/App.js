import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios'

class App extends Component { 
  state = { 
    gallery: []
  }
  componentDidMount(){
    this.getPhotos()
  } 

  getPhotos = () => { 
      axios.get('/gallery')
    .then(function (response) {
      console.log(response); 
      this.setState({
        gallery: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList gallery={this.state.gallery} />
      </div>
    );
  }
}

export default App;
