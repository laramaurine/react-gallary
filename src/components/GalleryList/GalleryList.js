import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'; 
import { Button, Grid, Card } from '@material-ui/core';

class GalleryList extends Component {
  render() {
    return (
      <div>
        {
          JSON.stringify(this.props.gallery)
        } 
        <img src={require(`${this.props.gallery}`)}></img> */}
        <Grid>
        { 
          
          this.props.gallery.map((item) => <GalleryItem photo={item} />)
          
        }
        </Grid>
      </div>        
    );
  }
}

export default GalleryList;
