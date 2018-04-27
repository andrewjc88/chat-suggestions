import React, { Component } from 'react';
import '../style/suggestionList.css';
import AOS from 'aos';

class SuggestionList extends Component {
  state = {
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
  render() {
    return (
      <div className="suggestions">
        {
          this.state.suggestions.map((suggestion) => (
            <div className="suggestion">
              <div className="suggestion-image" style={{ width: 128, height: 193, backgroundImage: `url(${suggestion.image})` }}></div>

              <img src="../img/3.jpg" alt="suggestion image"/>
              <div className="suggestion-details">
                <h3>{suggestion.name}</h3>
                <span>{suggestion.rating}</span>
                <span>{suggestion.type}</span>
                <span>{suggestion.reviews}</span>
                <button className="more-button" href={suggestion.link} >more...</button>
              </div>
              <voteBox /> 
            </div>
          ))
        }
      </div>
    );
  }
}

export default SuggestionList;