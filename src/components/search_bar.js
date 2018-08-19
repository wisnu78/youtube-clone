import React,{ Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      term:''
    }
  }

  render(){
    return(
      <div className="search-bar">
        <input
          onChange={e=>this.onSearch(e.target.value)}
          value={this.state.term}
        />
      </div>
    )
  }

  onSearch(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}
export default SearchBar;
