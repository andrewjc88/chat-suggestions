import React, { Component } from 'react';
import '../style/Chat.css';
import FindSuggestions from './FindSuggestions';

class Chat extends Component {

  state = {
    showSugSearch: false
  }

  clickFind = this.clickFind.bind(this);

  clickFind() {
    this.setState({showSugSearch: true})
  }

  render() {
    return (
      <div className="chat-wrapper">
        <h1>Chat with Sarah</h1>
        <div className="message user1 " data-aos="fade-up" data-aos-delay="500">
          <p>Hey how are you?</p>
        </div>
        <div className="message user2" data-aos="fade-up" data-aos-delay="1500">
          <p>Great! Still on for lunch today?</p>
        </div>
        <div className="message user1" data-aos="fade-up" data-aos-delay="2500">
          <p>Sure. Where should we meet?</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="3000">
          <button onClick={this.clickFind} >Recommend a place?</button>
        </div>
        {
          this.state.showSugSearch === true
          ?
          <div data-aos="fade-up">
            <FindSuggestions />
          </div>
          : null
        }
        <div className="chat-input-wrapper">
          <input className="chat-input" placeholder="write a message" type="text"/>
        </div>
      </div>
    );
  }
}

export default Chat;