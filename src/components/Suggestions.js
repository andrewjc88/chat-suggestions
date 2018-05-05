import React from 'react';
import '../style/suggestions.css';
import SuggestionList from './SuggestionList';

const Suggestions = () => (

  <div className="card">
    <h1 className="">
      {/* user name will populate */}
      Mike invited you to vote on suggestions
    </h1>
    <SuggestionList />
    <button
      className=""
      onClick={this.clickity}>
      Send votes
    </button>
    <h2 className="orStyles">or</h2>
    <button
      className=""
      onClick={this.clickity}>
      Suggest something else
    </button>
  </div>
)

export default Suggestions;