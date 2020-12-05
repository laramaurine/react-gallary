import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'; 
import { Button, Grid, Card } from '@material-ui/core';

class GalleryList extends Component {
  render() {
    return (
      <div>
        {
          JSON.stringify(gallery)
        }
        {/* <Grid>
        { 
          
            galleryItems.map((item) => <GalleryItem photo={item} />)
          
        }
        </Grid> */}
      </div>
    );
  }
}

export default GalleryList;
