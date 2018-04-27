import React, { Component } from 'react';
import '../style/suggestions.css';
import SuggestionList from './SuggestionList';


class Suggestions extends Component {
  render() {
    return (
      <div className="suggestions-body">
        <h1 className="suggestion-title">
        {/* user name will populate */}
          Mike invited you to vote on suggestions
        </h1>
        <SuggestionList resturants={this.props.resturants}/>

        <button 
          className="suggestion-button"
          // onClick={}
        >Suggest something else</button>
      </div>
    );
  }
}

export default Suggestions;