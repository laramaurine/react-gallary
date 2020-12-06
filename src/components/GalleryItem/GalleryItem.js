import React, { Component } from 'react';
import './GalleryItem.css';
import { Button, Card, CardHeader, CardContent, CardMedia, Typography} from '@material-ui/core';
import axios from 'axios'

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
    console.log('image with id', id, 'was liked'); 
    axios.put(`gallery/like/${id}`, {id: id})
    .then(
      this.props.getPhotos()
    )
  }

  render() { 
    let renderCard
    if (this.state.clicked === 'image') { 
      renderCard = 
      <Card  style={{width:"300px", display: "inline-block", backgroundColor: "rgb(65, 64, 64)"}}>
        <div className="imageDiv" onClick={(event) => this.cardClicked(event)}>
        <CardMedia
          component="img"
          alt={this.props.photo.description}
          height="100%"
          src={require(`${this.props.photo.path}`)}
          title="Contemplative Reptile"
        />
      </div> 
        <CardContent>
          <Typography color="white">
            {<Button variant="contained" color="primary" onClick={() => {
              this.likePhoto(this.props.photo.id)
            }} >{this.props.photo.likes} &#9829;</Button>}
          </Typography>
        </CardContent>
      </Card> 
    } else if (this.state.clicked === 'description') { 
      renderCard =  
      <Card style={{width:"300px", display: "inline-block", backgroundColor: "rgb(65, 64, 64)", color: "rgb(65, 64, 64)"}}>
        <div className="imageDiv" onClick={(event) => this.cardClicked(event)}>
        <CardHeader style={{color: "rgb(65, 64, 64)"}}  title={this.props.photo.title} subheader={this.props.photo.year}></CardHeader>
        <CardContent>
          <Typography color="#FFFFFF" gutterBottom>
            {this.props.photo.description} 
            {<br></br>}{<br></br>}{<br></br>}{<br></br>}{<br></br>}
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
 