import React, { Component } from 'react';
import axios from 'axios';

const config = {
  headers: {'Authorization': 'Bearer API key'},
  params: {
    term: 'tacos',
    location: 'main 123st'
  }
};

export default class App extends Component {

  componentWillMount() {
    axios.get('https://api.yelp.com/v3/businesses/search', config)
    .then(response => console.log(response));
    }
  
  render(){
    return (
      <p> My first yelp authentication request </p>
    );
  }
}