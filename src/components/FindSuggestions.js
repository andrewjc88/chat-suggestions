import React from 'react';
import '../style/FindSuggestions.css';
import { DebounceInput } from 'react-debounce-input';
import ShowSuggestions from './ShowSuggestions';
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
          <ShowSuggestions />
        </React.Fragment>
      )}
    </AppContext.Consumer>
  </div>

)

export default FindSuggestions;