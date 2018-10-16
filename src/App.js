import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GenerateQuote from './GenerateQuote';
import DisplayQuote from './DisplayQuote';

const sampleQuote = {
  quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  characterDirection : "Left"
   
}

class App extends Component {

  state = {quote: sampleQuote}

getQuote =(e) => {
  fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=200")
    .then(response => response.json())
    .then(data => {
        this.setState({
          quote : data[0]
        })
    }
    )
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <GenerateQuote selectQuote={this.getQuote} />
        <DisplayQuote quote={this.state.quote} />
        
      </div>
    );
  }
}

export default App;
