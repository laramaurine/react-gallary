import React, { Component } from 'react';
import './GalleryItem.css';
import { Button, Grid, Card, CardMedia, CardActionArea } from '@material-ui/core';

class GalleryItem extends Component {
  render() {
    return (
      <Card variant="outlined" style={{width:"300px", display: "inline-block"}}>
        <CardMedia
          component="img"
          alt={this.props.photo.description}
          height="140"
          src={require(`${this.props.photo.path}`)}
          title="Contemplative Reptile"
        />
        <CardActionArea>
            <Button variant="contained" color="primary">like</Button>
        </CardActionArea>
      </Card>
    );
  }
}

export default GalleryItem;
