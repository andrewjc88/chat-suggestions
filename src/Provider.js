import React, { Component } from 'react';
import AppContext from './Context';

class AppProvider extends Component {
  state = {
    showSuggestions: false,
    showFindSuggestions: false,
    query: [],
    suggestionResult: [],
    suggestionsPicks: [],
    messageVal: '',
    messages: '',
    suggestions: [
      {
        name: 'Mendocino Farms',
        rating: '4.5 star rating',
        type: '$$  Sandwiches, Salad',
        reviews: '67 reviews',
        image: 'https://s3-media1.fl.yelpcdn.com/bphoto/QiZFhtEuWUz9-4Nu-bDr-w/180s.jpg',
        link: 'https://www.yelp.com/biz/mendocino-farms-san-mateo?osq=lunch',
        vote: ''
      },
      {
        name: 'Cariblue Restaurant',
        rating: '5.0 star rating',
        type: '$$  Caribbean',
        reviews: ' 144 reviews',
        image: 'https://s3-media4.fl.yelpcdn.com/bphoto/ya-mfyTjFA_uptocnGNM6g/180s.jpg',
        link: 'https://www.yelp.com/biz/cariblue-restaurant-redwood-city?osq=lunch',
        vote: ''
      },
      {
        name: 'Johnston’s Saltbox',
        rating: '4.0 star rating',
        type: '$$  American',
        reviews: '668 reviews',
        image: 'https://s3-media2.fl.yelpcdn.com/bphoto/Bn129Kp2YDbeYS0Ku9BHvg/180s.jpg',
        link: 'https://www.yelp.com/biz/johnstons-saltbox-san-carlos?osq=lunch',
        vote: ''
      },
      {
        name: 'The Sandwich Spot',
        rating: '4.5 star rating',
        type: '$  Sandwiches, Hookah Bars',
        reviews: '690 reviews',
        image: 'https://s3-media2.fl.yelpcdn.com/bphoto/Id7DFC0t6bqZnIQr9qP3eQ/180s.jpg',
        link: 'https://www.yelp.com/biz/the-sandwich-spot-redwood-city-5?osq=lunch',
        vote: ''
      },
      {
        name: 'Vesta',
        rating: '4.5 star rating',
        type: '$$  Pizza, Tapas/Small Plates',
        reviews: '1377 reviews',
        image: 'https://s3-media4.fl.yelpcdn.com/bphoto/E6eE_maKXNqFuoAkkx5WMQ/180s.jpg',
        link: 'https://www.yelp.com/biz/vesta-redwood-city?osq=lunch',
        vote: ''
      },
      {
        name: 'The Refuge',
        rating: '4.0 star rating',
        type: '$$  Sandwiches, Burgers, Gastropubs',
        reviews: '1804 reviews',
        image: 'https://s3-media3.fl.yelpcdn.com/bphoto/XbdJs5YQahOj_TUwqUJdfQ/180s.jpg',
        link: 'https://www.yelp.com/biz/the-refuge-san-carlos?osq=lunch',
        vote: ''
      },
    ],
  };
  render() {
    return (
      <AppContext.Provider value={{

        state: this.state,

        clickShowFindSuggestions: () => this.setState(
          prevState => ({
            showFindSuggestions: !prevState.showFindSuggestions
          })
        ),

        clickShowSuggestions: () => this.setState(
          prevState => ({
            showSuggestions: !prevState.showSuggestions
          })
        ),

        getSuggestions: (input) => {
          if (input.length >= 1) {
            let val = input.toLowerCase();
            let matches = this.state.suggestions.filter(
              v => v.name.toLowerCase().includes(val)
            );
            this.setState({ suggestionResult: matches })
          } 
        },

        addSuggestionsPick: (suggestion) => this.setState({
          suggestionsPicks: [...this.state.suggestionsPicks, suggestion]
        }),

        upVoteClick: (nameOf) => {
          this.state.suggestionsPicks.map( sug => {
            console.log(sug);

            if (sug.name === nameOf) {
              return sug.vote = 'upVote';
            }
          })
          // console.log(voteSug);
          // this.setState((suggestionsPicks) => ({
          //   suggestionsPicks: voteSug
          // }))
        },

        // upVoteClick: (nameOf) => {
        //   let pick = ''
        //   this.state.suggestionsPicks.map(( sug, i ) => {
        //     vote:if(sug.name === nameOf) {
        //       pick += i;
        //     }
        //   this.setState({{ suggestionsPicks[pick].vote: pick }})
        //     console.log(pick)
        //   })
        // },

      //   downVoteClick: (nameOf) => {
      //     this.state.suggestionsPicks.map(sug => {
      //       this.setState({
      //         vote:if(sug.name === nameOf) {
      //         'downVote'
      //       }
      //     })
      //   })
      // },

        sendMessage: (message) => this.setState({
          messages: [...this.state.messages, message]
        })

  }
}>
  { this.props.children }
      </AppContext.Provider >
    )
  };
}

export default AppProvider;