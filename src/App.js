import React, { Component } from 'react';
import './style/AppGlobal.css';
import Chat from './components/Chat';
import AppProvider from './Provider';
import AOS from 'aos';
import StayScrolled from 'react-stay-scrolled';


class App extends Component {

  render() {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      delay: 1
    });

    return (
      <AppProvider>
        {/* <StayScrolled component="app"> */}
          <div className="app">
            <Chat />
          </div>
        {/* </StayScrolled> */}
      </AppProvider>
    );
  }
}

export default App;
