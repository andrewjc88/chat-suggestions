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

{/* <img alt="Mendocino Farms" class="photo-box-img" height="90" src="https://s3-media1.fl.yelpcdn.com/bphoto/QiZFhtEuWUz9-4Nu-bDr-w/90s.jpg" srcset="https://s3-media1.fl.yelpcdn.com/bphoto/QiZFhtEuWUz9-4Nu-bDr-w/180s.jpg 2.00x,https://s3-media1.fl.yelpcdn.com/bphoto/QiZFhtEuWUz9-4Nu-bDr-w/ms.jpg 1.11x,https://s3-media1.fl.yelpcdn.com/bphoto/QiZFhtEuWUz9-4Nu-bDr-w/120s.jpg 1.33x,https://s3-media1.fl.yelpcdn.com/bphoto/QiZFhtEuWUz9-4Nu-bDr-w/168s.jpg 1.87x,https://s3-media1.fl.yelpcdn.com/bphoto/QiZFhtEuWUz9-4Nu-bDr-w/ls.jpg 2.78x,https://s3-media1.fl.yelpcdn.com/bphoto/QiZFhtEuWUz9-4Nu-bDr-w/258s.jpg 2.87x" width="90"> */}
{/* <img alt="Cariblue Restaurant" class="photo-box-img" height="90" src="https://s3-media4.fl.yelpcdn.com/bphoto/ya-mfyTjFA_uptocnGNM6g/90s.jpg" srcset="https://s3-media4.fl.yelpcdn.com/bphoto/ya-mfyTjFA_uptocnGNM6g/180s.jpg 2.00x,https://s3-media4.fl.yelpcdn.com/bphoto/ya-mfyTjFA_uptocnGNM6g/ms.jpg 1.11x,https://s3-media4.fl.yelpcdn.com/bphoto/ya-mfyTjFA_uptocnGNM6g/120s.jpg 1.33x,https://s3-media4.fl.yelpcdn.com/bphoto/ya-mfyTjFA_uptocnGNM6g/168s.jpg 1.87x,https://s3-media4.fl.yelpcdn.com/bphoto/ya-mfyTjFA_uptocnGNM6g/ls.jpg 2.78x,https://s3-media4.fl.yelpcdn.com/bphoto/ya-mfyTjFA_uptocnGNM6g/258s.jpg 2.87x" width="90"> */}
{/* <img alt="Johnston's Saltbox" class="photo-box-img" height="90" src="https://s3-media2.fl.yelpcdn.com/bphoto/Bn129Kp2YDbeYS0Ku9BHvg/90s.jpg" srcset="https://s3-media2.fl.yelpcdn.com/bphoto/Bn129Kp2YDbeYS0Ku9BHvg/180s.jpg 2.00x,https://s3-media2.fl.yelpcdn.com/bphoto/Bn129Kp2YDbeYS0Ku9BHvg/ms.jpg 1.11x,https://s3-media2.fl.yelpcdn.com/bphoto/Bn129Kp2YDbeYS0Ku9BHvg/120s.jpg 1.33x,https://s3-media2.fl.yelpcdn.com/bphoto/Bn129Kp2YDbeYS0Ku9BHvg/168s.jpg 1.87x,https://s3-media2.fl.yelpcdn.com/bphoto/Bn129Kp2YDbeYS0Ku9BHvg/ls.jpg 2.78x,https://s3-media2.fl.yelpcdn.com/bphoto/Bn129Kp2YDbeYS0Ku9BHvg/258s.jpg 2.87x" width="90"> */}

    return (
      <div className="suggestions"> 
        {
          this.state.suggestions.map((suggestion) => (
            <div className="suggestion" data-aos="fade-up">
              <img src={suggestion.image} alt="suggestion image" className="suggestion-image" />
              <div className="suggestion-details">
                <h3>{suggestion.name}</h3>
                <span>{suggestion.rating}</span>
                <span>{suggestion.type}</span>
                <span>{suggestion.reviews}</span>
                <a className="more-button" target="_blank" href={suggestion.link} >more...</a>
              </div>
              <div className="vote-wrapper">
                
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default SuggestionList;