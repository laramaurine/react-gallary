import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'; 
import { Grid } from '@material-ui/core';

class GalleryList extends Component {
  render() {
    return (
      <div>
        {
          JSON.stringify(this.props.gallery)
        } 
        <Grid>
        { 
          this.props.gallery.map((item) => <GalleryItem key={item.id} photo={item} />)
        }
        </Grid>
      </div>        
    );
  }
}

export default GalleryList;
