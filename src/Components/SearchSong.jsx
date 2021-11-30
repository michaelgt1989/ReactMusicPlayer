import React from 'react';

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) =>{
        this.props.searchSong(this.state);
    }

const searchSong = () =>{
        return(
          <Model 
            show={this.props.isOpen} 
            onHide={this.props.closeModel}
          >
          <Model.Header closeButton>
            <Model.Title>Model Form Title</Model.Title>
          </Model.Header>
          <Model.Body>
              <Form.Group >
                  <Form.Label>Title: </Form.Label>
                  <Form.Control name= 'title' type="text" onChange={this.handleChange} value={this.state.title} placeholder={this.state.title}/>           
                  <Form.Label>Artist: </Form.Label>
                  <Form.Control name = 'artist' type="text" onChange={this.handleChange} value={this.state.artist} placeholder={this.state.artist}/>           
                  <Form.Label>Album: </Form.Label>
                  <Form.Control name = 'album' type="text" onChange={this.handleChange} value={this.state.album} placeholder={this.state.album}/>           
                  <Form.Label>Release Date: </Form.Label>
                  <Form.Control name = 'release_date' type="datetime-local" onChange={this.handleChange} value={this.state.release_date} placeholder={this.state.release_date}/>           
                  <Form.Label>Genre: </Form.Label>
                  <Form.Control name = 'genre' type="text" onChange={this.handleChange} value={this.state.genre} placeholder={this.state.genre}/>           
              </Form.Group>
          </Model.Body>
          <Model.Footer>
              <Button variant="primary" type="submit" onClick={() => this.props.handleSubmit(this.state.name)}>
                  Submit
              </Button>
          </Model.Footer>
        </Model>
        )
        }
export default searchSong;