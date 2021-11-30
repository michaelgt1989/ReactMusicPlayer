import React from 'react';

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) =>{
        this.props.searchSong(this.state);
    }
//commenting out for research. Attempted pop-up button to search for songs. 

// const searchSong = () =>{
//     return(
//     )
//     }
// export default searchSong;
