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
        <Modal 
            show={this.props.isOpen} 
            onHide={this.props.closeModel} >
            <Modal.Header closeButton>
            <Modal.Title>Temp Holding Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          </Modal.Body>
          <Modal.Footer>
              <Button variant="primary" type="submit" onClick={() => this.props.handleSubmit(this.state.name)}>
                  Submit
              </Button>
          </Modal.Footer>
        </Modal>
        )
        }
export default searchSong;