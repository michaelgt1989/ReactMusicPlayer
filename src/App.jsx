import React from 'react';
import './App.css';
import axios from './axios'
import SongSelection from './SongSelection'


//taken from axios slide with adjustments
//probably needs to be adjusted even more

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: []
         }
    }

componentDidMount(){
    this.reqSongs()
}


async reqSongs(){
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music')
    this.setState({
        songs: response.data
    })
}


render() { 
    return ( 
        <React.Fragment>
            <div className="ax-component">
            <SongSelection/>
            </div>
        </React.Fragment>
     );
 }
}









export default App;