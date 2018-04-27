import React, { Component } from 'react';
import '../style/suggestions.css';
import SuggestionList from './SuggestionList';
import FindSuggestions from './FindSuggestions'

class Suggestions extends Component {

  clickity = () => {
    return(<FindSuggestions />)
  }
  render() {
    
    return (
      <div className="card-body">
        <h1 className="">
        {/* user name will populate */}
          Mike invited you to vote on suggestions
        </h1>
        <SuggestionList />

        <button 
          className=""
          onClick={this.clickity}
        >Suggest something else</button>
      </div>
    );
  }
}

export default Suggestions;