import React, { Component } from 'react';


class GalleryItem extends Component {
  render() {
    return (
      <div>
        <p>hello from gallery item</p> 
        <p>{this.props.photo.description}</p> 
        <img src={require(`${this.props.photo.path}`)} alt={this.props.photo.description}></img>
      </div>
    );
  }
}

export default GalleryItem;
