import React from 'react';

class ThisSong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: [],
            search: ''
         }
    }

    
    componentDidMount(){
        this.getSongs()
    }
    
    async getSongs(){
        let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music')
        this.setState({
            songs: response.data
        })
    }

    async createSong(newSong){
        let response = await axios.post('http://www.devcodecampmusiclibrary.com/api/music', newSong)
    }

    async deleteSong(element){
        let response =  await axios.delete('http://www.devcodecampmusiclibrary.com/api/music'+element.id+'/')
        this.getSongs()
    }


    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) =>{
        event.preventDefault();
        this.filteredSearch()
    }

    filteredSearch = () =>{
        let filteredResults = this.state.songs.filter(song => {
            return song.title.toLowerCase().includes(this.state.search.toLowerCase()) || song.artist.toLowerCase().includes(this.state.search.toLowerCase()) || song.album.toLowerCase().includes(this.state.search.toLowerCase()) || song.release_date.toLowerCase().includes(this.state.search.toLowerCase()) || song.genre.toLowerCase().includes(this.state.search.toLowerCase())
        })
        this.setState({
            songs : filteredResults
        })
    }
    

    render() { 
        return (
        <React.Fragment>
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th>
                            <form onSubmit = {this.handleSubmit}>
                                <input name= 'search' onChange = {this.handleChange} value = {this.state.search}/> 
                                <button type = 'submit'>Search</button>
                            </form>
                        </th>
                        <th>
                        <button onClick = {() => this.setState(this.reqSong)}>Show All</button>
                        </th>
                    </tr>
                </thead>
                {this.state.songs.map((element) => <><tbody><tr class="active-row"><td>{element.title}</td> <td>{element.artist}</td> <td>{element.album}</td><td>{element.release_date}</td><td>{element.genre}</td><td><button onClick={() => this.deleteSong(element)}>Delete</button></td></tr></tbody></> )}      
            </table>
            <h3 className='h3'>Submit Song</h3>
            <table class='styled-table'>
                <tbody>
                <tr>
                    <td class="active-row">
                    <SubmitSong submitSong = {this.submitSong}/>    
                    </td>
                </tr>
                </tbody>
            </table>
            
        </React.Fragment> 
         );
    }
}
 
export default ThisSong;