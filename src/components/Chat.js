import React from 'react';
import '../style/Chat.css';
import FindSuggestions from './FindSuggestions';
import Suggestions from './Suggestions';
import AppContext from '../Context';

const Chat = () => (

  <AppContext.Consumer>
    {(context) => (
      <React.Fragment>
        <div className={"chat-wrapper"}>
          <h1 className="chat-title">Chat with Sarah</h1>
          <div className={"chat-messages-wrapper"}>
            <div className="message user1 " data-aos="fade-up" data-aos-delay="500">
              <p><b>Sarah:</b> Hey how are you?</p>
            </div>
            <div className="message user2" data-aos="fade-up" data-aos-delay="1500">
              <p><b>You:</b> Great! Still on for lunch today?</p>
            </div>
            <div className="message user1" data-aos="fade-up" data-aos-delay="2500">
              <p><b>Sarah:</b> Sure. Where should we meet?</p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="3000">
            <button
              onClick={() => {
                context.clickShowFindSuggestions()
              }}>
              Recommend a place?
            </button>

          </div>
          {
            context.state.showFindSuggestions === true ?
              <div data-aos="fade-up">
                <FindSuggestions />
              </div>
              : null
          }
          {
            context.state.showSuggestions === true ?
              <div data-aos="fade-up">
                <h2 >Recommendations seen by other user</h2>
                <Suggestions />
              </div >
              : null
          }
          <div className="chat-input-background">
            <div className="chat-input-wrapper">
              <input
                className="chat-input"
                placeholder="write a message"
                value={context.messages}
                onChange={context.sendMessage}
                type="text" />
            </div>
          </div>
        </div>
      </React.Fragment>
    )}
  </AppContext.Consumer>
)

export default Chat;