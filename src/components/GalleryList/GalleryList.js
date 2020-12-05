import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
const galleryItems = require('../../modules/gallery.data.js'); 

class GalleryList extends Component {
  render() {
    return (
      <div>
        {
          JSON.stringify(galleryItems)
        } 
        { 
          galleryItems.map((item) => <GalleryItem photo={item} />)
        }
      </div>
    );
  }
}

export default GalleryList;
