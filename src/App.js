import React, { Component } from 'react';
import './style/GlobalStyles.css';
import Chat from './components/Chat';
import FindSuggestions from './components/FindSuggestions';
import Suggestions from './components/Suggestions';
import AOS from 'aos';


class App extends Component {

  render() {

    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      delay: 1,
    });
    
    return (
      <div>
        <div>
          <Chat /> 
        </div>
        <div data-aos="fade-up">
          <FindSuggestions /> 
        </div >
        <div data-aos="fade-up">
          <Suggestions />
        </div>
      </div>
    );
  }
}

export default App;
