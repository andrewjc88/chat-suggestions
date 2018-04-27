import React, { Component } from 'react';
import '../style/suggestionList.css';

class SuggestionList extends Component {
  state = {
    suggestions: [
      {
        name: 'Mendocino Farms',
        rating: '4.5 star rating',
        type: '$$  Sandwiches, Salad',
        reviews: '67 reviews',
        image: 'https://s3-media1.fl.yelpcdn.com/bphoto/QiZFhtEuWUz9-4Nu-bDr-w/180s.jpg',
        link: 'https://www.yelp.com/biz/mendocino-farms-san-mateo?osq=lunch' 
      },
      {
        name: 'Cariblue Restaurant',
        rating: '5.0 star rating',
        type: '$$  Caribbean',
        reviews: ' 144 reviews',
        image: 'https://s3-media4.fl.yelpcdn.com/bphoto/ya-mfyTjFA_uptocnGNM6g/180s.jpg',
        link: 'https://www.yelp.com/biz/cariblue-restaurant-redwood-city?osq=lunch' 
      },
      {
        name: 'Johnston’s Saltbox',
        rating: '4.0 star rating',
        type: '$$  American',
        reviews: '668 reviews',
        image: 'https://s3-media2.fl.yelpcdn.com/bphoto/Bn129Kp2YDbeYS0Ku9BHvg/180s.jpg',
        link: 'https://www.yelp.com/biz/johnstons-saltbox-san-carlos?osq=lunch' 
      },
    ]
  }
  render() {
    return (
      <div className="suggestions"> 
        {
          this.state.suggestions.map((suggestion) => (
            <div className="suggestion" key={suggestion.name} data-aos="fade-up">
              <img src={suggestion.image} alt={suggestion.name} className="suggestion-image" />
              <div className="suggestion-details" >
                <h3>{suggestion.name}</h3>
                <p>{suggestion.rating}</p>
                <p>{suggestion.type}</p>
                <p>{suggestion.reviews}</p>
                
                <a className="more-button" target="_blank" href={suggestion.link} >more...</a>
              </div>
              <div className="icon-wrapper">
                  <p href="" id="bounce" className="vote-icon up"></p>
                  <p href="" id="bounce" className="vote-icon down"></p>

              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default SuggestionList;