// Import React and Component
import React, { Component } from 'react';
// Import CSS from App.css
import './styles/styles.css'
// Import the Today component to be used below
import Today from './components/Today'
// Import the History component to be used below
import History from './components/History'

class App extends Component {
  render() {
    return (
      <div className="">
          <div className="topheader">
              <header className="container">
                  <nav className="navbar">
                      <div className="navbar-brand">
                          <span className="navbar-item">cryptoMate</span>
                      </div>
                      <div className="navbar-end">
                          <a className="navbar-item" href="https://pusher.com" target="_blank" rel="noopener noreferrer">about</a>
                      </div>
                  </nav>
              </header>
          </div>
          <section className="results--section">
              <div className="container">
                  <h1>cryptoMate<br></br> live BTC, ETH and LTC.</h1>
              </div>
              <div className="results--section__inner">
                  <Today />
                  <History />
              </div>
          </section>
      </div>
    );
  }
}

export default App;