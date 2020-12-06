import React, { Component } from 'react';
import './GalleryItem.css';
import { Button, Card, CardHeader, CardContent, CardMedia, Typography} from '@material-ui/core';

class GalleryItem extends Component {
  state = { 
    clicked: 'image', 
  } 

  cardClicked = () => { 
    console.log('card was clicked')
    console.log('state of card when clicked', this.state.clicked)
    if (this.state.clicked === 'image') {
      this.setState({
        clicked: 'description'
      }) 
    } else if (this.state.clicked === 'description') { 
      this.setState({
        clicked: 'image'
      }) 
    }
  } 

  likePhoto = (id) => { 
    console.log('image with id', id, 'was liked')
  }

  render() { 
    let renderCard
    if (this.state.clicked === 'image') { 
      renderCard = 
      <Card variant="outlined" style={{width:"300px", display: "inline-block"}}>
        <div className="imageDiv" onClick={(event) => this.cardClicked(event)}>
        <CardMedia
          component="img"
          alt={this.props.photo.description}
          height="140"
          src={require(`${this.props.photo.path}`)}
          title="Contemplative Reptile"
        />
      </div> 
        <CardContent>
          <Typography color="textSecondary">
            {this.props.photo.likes}
            {<Button variant="contained" color="primary" onClick={() => {
              this.likePhoto(this.props.photo.id)
            }} >&#9829;</Button>}
          </Typography>
        </CardContent>
      </Card> 
    } else if (this.state.clicked === 'description') { 
      renderCard =  
      <Card variant="outlined" style={{width:"300px", display: "inline-block"}}>
        <div className="imageDiv" onClick={(event) => this.cardClicked(event)}>
        <CardHeader title="This image header" subheader={this.props.photo.year}></CardHeader>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {this.props.photo.description}
          </Typography>
        </CardContent>
      </div> 
     </Card> 
    }

    return (
      <span>
          {renderCard}
      </span>
    );
  }
}

export default GalleryItem;
 