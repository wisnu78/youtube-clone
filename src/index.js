import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDrXQymz1DQn1ACjenAsF2bO1SG8tX5NmY';

class App extends Component{
  constructor(props){
      super(props);
      this.state={
        videos:[],
        selectedVideo:null
      }
  }

  componentWillMount(){
    this.searchVideos("Via Vallen");
  }

  searchVideos(term){
    YTSearch({key:API_KEY,term:term},(videos)=>{
      this.setState({
              videos       : videos,
              selectedVideo:videos[0]
       });
    });
  }

  render(){
    return(
       <div>
          <SearchBar onSearchTermChange={term => this.searchVideos(term)} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onSelectedVideo={selectedVideo => this.setState({selectedVideo})}
          />
       </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
