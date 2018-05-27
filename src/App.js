import React, { Component } from 'react';
import './style/AppGlobal.css';
import Chat from './components/Chat';
import AppProvider from './Provider';
import AOS from 'aos';


class App extends Component {

  render() {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      delay: 1
      
    });

    return (
      <AppProvider>
          <div className="app">
            <Chat />
          </div>

      </AppProvider>
    );
  }
}

export default App;
