import React from 'react';
import AppContext from '../Context';
import '../style/suggestionList.css';

const ShowSuggestions = () => (
  <AppContext.Consumer>
    {(context) => (
      <React.Fragment>
        {
          context.state.suggestionResult.slice(0, 4).map((result) => (
            <div key={result.name}
              className={"suggestion-card " + (
                context.state.suggestionsPicks.includes(result) ?
                  "suggestion-card-selected" : "")}>
              <img
                src={result.image}
                alt={result.name}
                className="suggestion-image"
              />
              <div className="suggestion-detail-wrapper">
                <div className="suggestion-details" >
                  <h3>{result.name}</h3>
                  <p>{result.rating}</p>
                  <p>{result.type}</p>
                  <p>{result.reviews}</p>
                  <a className="more-button"
                    target="_blank" href={result.link} >more...
              </a>
                </div>
              </div>
              <div className="add-wrapper">
                <b>Recommend</b>
                <div className="add-button-wrapper" 
                  onClick={ () => context.addSuggestionsPick(result)
                }>
                  <div className="add-button"></div>
                </div>
              </div>
            </div>
          ))
        }{
          context.state.suggestionsPicks.length >= 1 ?
            <button onClick={() => {
              context.clickShowFindSuggestions()
              context.clickShowSuggestions()
            }}>Send recomendations</button>
            : null
        }
      </React.Fragment>
    )}
  </AppContext.Consumer>
);

export default ShowSuggestions