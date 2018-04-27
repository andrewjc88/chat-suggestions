import React, { Component } from 'react';
import Suggestions from './Suggestions';
import '../style/FindSuggestions.css';
import {DebounceInput} from 'react-debounce-input';


class FindSuggestions extends Component {
  state = {
    showRecommendations: false,
    suggestionResult: [],
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

  recommendClick = this.recommendClick.bind(this);

  recommendClick() {
    this.setState({showRecommendations: true})
    this.setState({suggestionResult: []});
  }

  getSuggestions = (input) => {
    if( input.length >= 1){
      let val = input.toLowerCase();
      let matches = this.state.suggestions.filter(v => v.name.toLowerCase().includes(val));
      console.log(matches)
      this.setState({suggestionResult: matches})
    }
  }

  render() {

    return (
      <div className="card-body">
        <h1 className="title">
          Search nearby places to recommend
        </h1>
        <div className="search-box-wrapper">
              <DebounceInput
                minLength={2}
                debounceTimeout={400}
                type="text"
                className="search-box"
                placeholder="Search... ( try typing john or cariblue )"
                value={this.query}
                onChange={(event) => this.getSuggestions(event.target.value)}
              />
          </div>
          {
          this.state.suggestionResult.length >= 1 ?
          
            this.state.suggestionResult.map((result) => (
              <div className="search-result" key={result.name}>

                <img src={result.image} alt={result.name} className="suggestion-image" />
                <div className="suggestion-details" >
                  <h3>{result.name}</h3>
                  <span>{result.rating}</span>
                  <span>{result.type}</span>
                  <span>{result.reviews}</span>
                  <a className="more-button" target="_blank" href={result.link} >more...</a>
                </div>
                <button onClick={this.recommendClick}>Recommend</button>
              </div>
            ))
        
          : null
          }
          {/* {
            this.state.showRecommendations === true
            ?
            <Suggestions />
            : null
          } */}

            
      </div>
    );
  }
}

export default FindSuggestions;