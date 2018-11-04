import React, { Component } from 'react';
import './App.css';
import './doge2.jpg';
import jsonData from './output.json';

const reactStringReplace = require('react-string-replace')

class App extends Component {
  state = {
    data: jsonData,
    Investment: 0,
    Date1: null
  }

  investHandler = (event) => {
    this.setState({
      Investment: event.target.value
    })
  }

  dateHandler = (event) => {
    this.setState({
      Date1: event.target.value
    })
  }

  textReplacer = () => {
    let replacedText;
    let jsn = this.state.data.title;
    replacedText = reactStringReplace(jsn, "\n", (match, i) => (
      <a></a>
    ));
  }

  render() {

    let jsn = this.state.data.title;
    const reactStringReplace = require('react-string-replace')

    let replacedText;
    replacedText = reactStringReplace(jsn, "\n", (match, i) => (
      <a></a>
    ));

    let str = this.state.data.title;
    let searchAlt = str.search(this.state.Date1);

    let k = str.slice(searchAlt+13,searchAlt+19);

    let coins = this.state.Investment/k;
    let rounder = coins.toFixed(5);

    let string1;
    string1 = replacedText.toString();

    let replaceString; 
    replaceString = reactStringReplace(string1, ",[object Object],", (match, i) => (
      <a></a>
    ));

    let todayValue;
    todayValue = rounder * replacedText[24];
    let tvRound = todayValue.toFixed(2);

    let n = 24;

    let per = (100*(replacedText[24]/k)).toFixed(2);
    
    let uhf = null;
    
    if (per>1000) {
      uhf = <a href="https://www.youtube.com/watch?v=qileP4bAzek">Follow-up Link</a>;
    }

    return (
      <div className="App">
        <h1 className="rainbow">Hindsight BC</h1>
        <img src={require('./doge2.jpg')} width="200" height="200" alt="dogecoin" />
        <br></br>
        <br></br>
        <a>Date (ex: Apr 02, 2014): </a>
        <input type="text" className="date" onChange={this.dateHandler} key="date" />
        <a>  Investment (US$): </a>
        <input type="text" className="Investment" onChange={this.investHandler} key="invest" />
        <br></br>
        <p>Today, Bitcoin is worth ${replacedText[24]}.</p>
        <p>On {this.state.Date1}, Bitcoin was worth ${k}.</p>
        <p>If you invested ${this.state.Investment} on {this.state.Date1},</p> 
        <p>You would have {rounder} coins, valued today at: ${tvRound}.</p>
        <p>This would be a {per}% difference.</p>
        <br></br>
        <p>{uhf}</p>
      </div>
      
    );
  }
}

export default App;
