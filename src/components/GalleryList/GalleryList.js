import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'; 
import { Grid } from '@material-ui/core';

class GalleryList extends Component {
  render() {
    return (
      <div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <Grid>
        { 
          this.props.gallery.map((item) => <GalleryItem key={item.id} photo={item} getPhotos={this.props.getPhotos} />)
        }
        </Grid>
      </div>        
    );
  }
}

export default GalleryList;
