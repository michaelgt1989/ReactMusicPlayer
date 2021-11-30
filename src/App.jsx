import React, {Component} from 'react';
import './App.css';
import LandingMenu from './LandingMenu'
import axios from './axios'
import SongSelection from './SongSelection'

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
                <LandingMenu/>
                <SongSelection/>
                </div>
            </React.Fragment>
         );
    }
}









export default App;