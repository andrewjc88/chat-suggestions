import React, { Component } from 'react';
import '../style/Chat.css';
import FindSuggestions from './FindSuggestions';
import AOS from 'aos'

class Chat extends Component {

  clickHandler = () => {
    return <FindSuggestions />
  }

  render() {
    return (
      <div className="chat-wrapper">
        <h1>Chat with Sarah</h1>
        <div className="message user1 " data-aos="fade-up">
          <p>Hey how are you?</p>
        </div>
        <div className="message user2" data-aos="fade-up">
          <p>Great! Still on for lunch today?</p>
        </div>
        <div className="message user1" data-aos="fade-up">
          <p>Sure. Where should we meet?</p>
        </div>
        <div data-aos="fade-up">
          <button onClick={this.clickHandler} >Reccomend a place?</button>
        </div>
      </div>
    );
  }
}

export default Chat;