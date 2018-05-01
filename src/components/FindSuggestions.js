import React from 'react';
import '../style/FindSuggestions.css';
import { DebounceInput } from 'react-debounce-input';
import AppContext from '../Context';

const FindSuggestions = () => (

  <div className="card">
    <AppContext.Consumer>
      {(context) => (
        <React.Fragment>
          <h1 className="title">
            Search nearby places to recommend
            </h1>
          <div className="search-wrapper">
            <DebounceInput
              minLength={1}
              debounceTimeout={400}
              type="text"
              className="search-box"
              placeholder="Search... ( try typing john or cariblue )"
              onChange={(event) => context.getSuggestions(
                event.target.value
              )}
            />
          </div>
          {
            context.state.suggestionResult.slice(0, 4).map((result) => (
              <div key={result.name}
                className={"suggestion-card " + (
                  context.state.suggestionsPicks.includes(result) ?
                    "suggestion-card-selected" : "" )}>
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
                  <div className="add-button-wrapper" onClick={
                    () => context.addSuggestionsPick(result)
                  }>
                    <div className="add-button"></div>
                  </div>
                </div>
              </div>
            ))
          }
          {
            context.state.suggestionsPicks.length >= 1 ?
              <button onClick={() => { context.clickShowSuggestions() }}>Send recomendations</button>
              : null
          }
        </React.Fragment>
      )}
    </AppContext.Consumer>
  </div>

)

export default FindSuggestions;