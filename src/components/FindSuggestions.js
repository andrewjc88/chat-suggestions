import React, { Component } from 'react';
import '../style/FindSuggestions.css';
import {DebounceInput} from 'react-debounce-input';


class FindSuggestions extends Component {
  state = {
    query: '',
    suggestionResult: [],
    suggestions: [
      {
        name: 'Mendocino Farms',
        rating: '4.5 star rating',
        type: '$$  Sandwiches, Salad',
        reviews: '67 reviews',
        image: '../img/1.jpg',
        link: 'https://www.yelp.com/biz/mendocino-farms-san-mateo?osq=lunch' 
      },
      {
        name: 'Cariblue Restaurant',
        rating: '5.0 star rating',
        type: '$$  Caribbean',
        reviews: ' 144 reviews',
        image: '../img/2.jpg',
        link: 'https://www.yelp.com/biz/cariblue-restaurant-redwood-city?osq=lunch' 
      },
      {
        name: 'Johnston’s Saltbox',
        rating: '4.0 star rating',
        type: '$$  American',
        reviews: '668 reviews',
        image: '../img/3.jpg',
        link: 'https://www.yelp.com/biz/johnstons-saltbox-san-carlos?osq=lunch' 
      },
    ]
  }

  getSuggestions = (input) => {
    let val = input.toLowerCase();
    let matches = this.state.suggestions.filter(v => v.name.toLowerCase().includes(val));
    this.setState((suggestionResult) => {
      return{matches}
    })
  }

  render() {

    return (
      <div className="card-body">
        <h1 className="title">
          Search for nearby places to suggest
        </h1>
        <div className="search-box">
              <DebounceInput
                minLength={2}
                debounceTimeout={400}
                type="text"
                className="input"
                placeholder="Search for nearby places!"
                value={this.query}
                onChange={(event) => this.getSuggestions(event.target.value)}
              />
          </div>
          {console.log(this.state.suggestionResult)}
          <div className="search-results">
            {
              this.state.suggestionResult != null ?
              <h2>{this.state.suggestionResult.name}</h2>
              : 
              <h2>no results...</h2>
            }
          </div>
      </div>
    );
  }
}

export default FindSuggestions;