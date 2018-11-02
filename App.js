import React, { Component } from 'react';
import './App.css';
import './doge2.jpg';
import jsonData from './output.json';

const reactStringReplace = require('react-string-replace')
const fs = require('fs');

class App extends Component {
  state = {
    data: jsonData,
    Day: null,
    Month: null,
    Year: null,
    Investment: 0
  }

  dayHandler = (event) => {
    this.setState({
      Day: event.target.value
    })
  }
  monthHandler = (event) => {
    this.setState({
      Month: event.target.value
    })
  }
  yearHandler = (event) => {
    this.setState({
      Year: event.target.value
    })
  }
  investHandler = (event) => {
    this.setState({
      Investment: event.target.value
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

    
    let Day = "Day";
    let jsn = this.state.data.title;
    const reactStringReplace = require('react-string-replace')

    let replacedText;
    replacedText = reactStringReplace(jsn, "\n", (match, i) => (
      <a></a>
    ));

    
    let k = null;
    let d = 1;
    let x = this.state.Day-1;


    if ( this.state.Day == d+x && this.state.Month == 5 && (this.state.Year == 2013||this.state.Year == 13)) {
      k = replacedText[replacedText.length - 65 - (x*18)];}
    


    let coins = this.state.Investment/k;
    let rounder = coins.toFixed(5);

    let string1;
    string1 = replacedText.toString();

    let replaceString 
    replaceString = reactStringReplace(string1, ",[object Object],", (match, i) => (
      <a></a>
    ));

    let todayValue;
    todayValue = rounder * replacedText[24];
    let tvRound = todayValue.toFixed(2);

    // alert(typeof replaceString);

    let n = 24;


    return (
      <div className="App">
        <h33 className="rainbow">Hindsight BC</h33>
        <br></br>
        <br></br>
        <img src={require('./doge2.jpg')} width="200" height="200" />
        <br></br>
        <br></br>
        <br></br>
        <np id="demo">{Day}: </np>
        <input type="text" className="Day" onChange={this.dayHandler} key="day" />
        <np>{' '}</np>
        <np>Month: </np>
        <input type="text" className="Day" onChange={this.monthHandler} key="month" />
        <np>{' '}</np>
        <np>Year: </np>
        <input type="text" className="Year" onChange={this.yearHandler} key="year" />
        <np>{' '}</np>
        <np>Investment: </np>
        <input type="text" className="Investment" onChange={this.investHandler} key="invest" />
        <br></br>
        {/* <np>{this.state.Day}</np> */}
        {/* <br></br>
        <np>{this.state.Month}</np>
        <br></br>
        <np>{this.state.Year}</np>
        <br></br>
        <np>${this.state.Investment}</np>
        <br></br> */}
        <br></br>
        {/* <np id='first'>{replacedText[24]}</np>
        <br></br>
        <np>{replacedText[42]}</np>
        <br></br>
        <np>{replacedText[60]}</np>
        <br></br>
        <np>{replacedText[n+18]}</np>
        <br></br> */}
        <p>{k}</p>
        <br></br>
        <p>If you invested ${this.state.Investment} on {this.state.Month}/{this.state.Day}/{this.state.Year},</p> 
        <p>You would have {rounder} coins, valued today at: ${tvRound}</p>
        <br></br>
        {/* <p>{replaceString.slice(-11)[0]}</p>
        <br></br>
        <p>{replaceString.slice(-29)[0]}</p> */}
        {/* <p>{this.dateHandler()}</p> */}
        {/* <p>{Object.keys(this.state.data)[0]}</p> */}
        {/* <p>{this.state.data.title}</p> */}
      </div>
    );
  }
}

export default App;
