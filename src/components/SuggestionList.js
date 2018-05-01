import React from 'react';
import AppContext from '../Context';
import '../style/suggestionList.css';

const SuggestionList = () => (
  <div className="suggestions">
    <AppContext.Consumer>
      {(context) => (
        < React.Fragment >
          {
            context.state.suggestionsPicks.map((suggestion) => (
              <div className="suggestion-card"
                key={suggestion.name}>
                <img src={suggestion.image}
                  alt={suggestion.name}
                  className="suggestion-image" />
                <div className="suggestion-details" >
                  <h3>{suggestion.name}</h3>
                  <p>{suggestion.rating}</p>
                  <p>{suggestion.type}</p>
                  <p>{suggestion.reviews}</p>
                  <a className="more-button"
                    target="_blank"
                    href={suggestion.link} >more...</a>
                </div>

                <div className="icons-container">
                  <div className="icon-wrapper"
                    onClick={ () => {context.upVoteClick(suggestion.name)} }>
                    <div className={"icon-background " + (
                      suggestion.vote === 'upVote' ?
                      "icon-background-clicked" : "" )}>
                      <div className="icon up"></div>
                    </div>
                  </div>
                  <div className="icon-wrapper"
                    onClick={ () => {context.downVoteClick(suggestion.name)} }>
                    <div className={"icon-background " + (
                      suggestion.vote === 'downVote' ?
                      "icon-background-clicked" : "" )}>
                      <div className="icon down"></div>
                    </div>
                  </div>
                </div>
                {console.log( suggestion.vote )}
              </div>
            ))
          }
        </React.Fragment>
      )}
    </AppContext.Consumer>
  </div>

);

export default SuggestionList;