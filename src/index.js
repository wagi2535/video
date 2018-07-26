import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import './index.css';
import SearchBar from "./component/search-bar";
import  VidoeList from "./component/video-list";
import VideoDetails from "./component/video-details"
const API_KEY = 'AIzaSyCj8CO6keNP0GeW7nQ6kl0cE2fGp3E2Sfc';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videos:[],
            selectedVideo:null
            
        }
        
        YTSearch({key:API_KEY, term:'Reactjs'}, videos => {
            //this.setState({videos:videos}) same as the below
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            })
        })
    }
    
    render() {
    return (
        <div>
        <SearchBar />
         <VideoDetails video = {this.state.selectedVideo} />
        <VidoeList 
        onVideoSelect= {selectedVideo => this.setState({selectedVideo}) }
        videos = {this.state.videos} />
        </div>
        )
   }
}
ReactDOM.render(<App />, document.getElementById('root'));
