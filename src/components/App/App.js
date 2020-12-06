import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios'

class App extends Component { 
  state = { 
    gallery: [],
  }

  componentDidMount(){ 
    console.log('component did mount')
    this.getPhotos()
  } 

  getPhotos = () => {
    axios({
      method: 'GET', 
      url: '/gallery'
    })
    .then((response) => {
      //the info we want is in the response
      console.log('response', response.data);
      this.setState({
        gallery: response.data
      })
      
    })
    .catch((error) => {
      alert('Something bad happening in GET');
      console.log('error', error);  
    })
  }

  render() {
    console.log(this.state)
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
