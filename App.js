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
    Investment: 0,
    Date1: null
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



    let Day = "Day";
    let jsn = this.state.data.title;
    const reactStringReplace = require('react-string-replace')

    let replacedText;
    replacedText = reactStringReplace(jsn, "\n", (match, i) => (
      <a></a>
    ));




    let str = this.state.data.title;
    let searchOut = str.match(/this.state.Date1/g);
    let searchAlt = str.search(this.state.Date1);
    let searchAlt2 = str.search("Mar 13, 2017");
    let searchOut2 = str.match(/Mar 13, 2017/g);

    let k = str.slice(searchAlt+13,searchAlt+19);




 
    // const d = 1;
    // let x = this.state.Day-1;

    // const y = 14;
    // let z = this.state.Year-14;
    // let q = y+z;



    // if ( 
      
    //   this.state.Day == d+x && 
      
    //   this.state.Month == 1 && 
    //   (
    //   this.state.Year == 2014||
    //   this.state.Year == q)) {
    //   k = replacedText[replacedText.length - 4481 - (x*18) - ((z*365*18)+(z + z)) ];
    // }
    
    // if ( 
    //   this.state.Day == d+x && 
    //   this.state.Month == 2 && (
    //   this.state.Year == 2014||
    //   this.state.Year == q)) {
    //   k = replacedText[replacedText.length - 4481 - (x*18) - (31*18) - ((z*365*18)+(z + z + z + z)) ];}

    // if ( 
    //   this.state.Day == d+x && 
    //   this.state.Month == 3 && (
    //   this.state.Year == 2014||
    //   this.state.Year == q)) {
    //   k = replacedText[replacedText.length - 4481 - (x*18) - (59*18) - ((z*365*18)+(z + z + z + z)) ];}

    // if ( 
    //   this.state.Day == d+x && 
    //   this.state.Month == 4 && (
    //   this.state.Year == 2014||
    //   this.state.Year == q)) {
    //   k = replacedText[replacedText.length - 4481 - (x*18) - (90*18) - ((z*365*18)+(z + z + z + z)) ];}

    // if ( 
    //   this.state.Day == d+x && 
    //   this.state.Month == 5 && (
    //   this.state.Year == 2014||
    //   this.state.Year == q)) {
    //   k = replacedText[replacedText.length - 4481 - (x*18) - (120*18) - ((z*365*18)+(z + z + z + z)) ];}

    // if ( 
    //   this.state.Day == d+x && 
    //   this.state.Month == 6 && (
    //   this.state.Year == 2014||
    //   this.state.Year == q)) {
    //   k = replacedText[replacedText.length - 4481 - (x*18) - (151*18) - ((z*365*18)+(z + z + z + z)) ];}

    // if ( 
    //   this.state.Day == d+x && 
    //   this.state.Month == 7 && (
    //   this.state.Year == 2014||
    //   this.state.Year == q)) {
    //   k = replacedText[replacedText.length - 4481 - (x*18) - (181*18) - ((z*365*18)+(z + z + z + z)) ];}
    
    // if ( 
    //   this.state.Day == d+x && 
    //   this.state.Month == 8 && (
    //   this.state.Year == 2014||
    //   this.state.Year == q)) {
    //   k = replacedText[replacedText.length - 4481 - (x*18) - (212*18) - ((z*365*18)+(z + z + z + z)) ];}

    // if ( 
    //   this.state.Day == d+x && 
    //   this.state.Month == 9 && (
    //   this.state.Year == 2014||
    //   this.state.Year == q)) {
    //   k = replacedText[replacedText.length - 4481 - (x*18) - (243*18) - ((z*365*18)+(z + z + z + z)) ];}

    // if ( 
    //   this.state.Day == d+x && 
    //   this.state.Month == 10 && (
    //   this.state.Year == 2014||
    //   this.state.Year == q)) {
    //   k = replacedText[replacedText.length - 4481 - (x*18) - (273*18) -  ((z*365*18)+(z + z + z + z)) ];}

    // if ( 
    //   this.state.Day == d+x && 
    //   this.state.Month == 11 && (
    //   this.state.Year == 2014||
    //   this.state.Year == q)) {
    //   k = replacedText[replacedText.length - 4481 - (x*18) - (304*18) -  ((z*365*18)+(z + z + z + z)) ];}

    // if ( 
    //   this.state.Day == d+x && 
    //   this.state.Month == 12 && (
    //   this.state.Year == 2014||
    //   this.state.Year == q)) {
    //   k = replacedText[replacedText.length - 4481 - (x*18) - (334*18) -  ((z*365*18)+(z + z + z + z)) ];}



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

    let per = (100*(replacedText[24]/k)).toFixed(2);

    return (
      <div className="App">
        <h33 className="rainbow">Hindsight BC</h33>
        <br></br>
        <br></br>
        <img src={require('./doge2.jpg')} width="200" height="200" />
        <br></br>
        <br></br>
        <br></br>
        {/* <np id="demo">{Day}: </np>
        <input type="text" className="Day" onChange={this.dayHandler} key="day" />
        <np>{' '}</np>
        <np>Month: </np>
        <input type="text" className="Day" onChange={this.monthHandler} key="month" />
        <np>{' '}</np>
        <np>Year: </np>
        <input type="text" className="Year" onChange={this.yearHandler} key="year" />
        <np>{' '}</np> */}
        <np>Date (ex: Apr 20, 2014): </np>
        <input type="text" className="date" onChange={this.dateHandler} key="date" />
        {/* <pn>{this.state.Date1}</pn> */}
        <pn>  </pn>
        <np>Investment: </np>
        <input type="text" className="Investment" onChange={this.investHandler} key="invest" />
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
        <p>Today, Bitcoin is worth ${replacedText[24]}.</p>
        <p>On {this.state.Date1}, Bitcoin was worth ${k}.</p>
        <p>If you invested ${this.state.Investment} on {this.state.Date1},</p> 
        <p>You would have {rounder} coins, valued today at: ${tvRound}.</p>
        <p>This would be a {per}% difference.</p>
        <br></br>
        {/* <p>{replaceString.slice(-11)[0]}</p>
        <br></br>
        <p>{replaceString.slice(-29)[0]}</p> */}
        {/* <p>{this.dateHandler()}</p> */}
        {/* <p>{Object.keys(this.state.data)[0]}</p> */}
        {/* <p>{this.state.data.title}</p> */}
        {/* <br></br>
        <p>{sear}</p> */}
        {/* <p>{searchOut}</p>
        <p>Position in array: {searchAlt}</p>
        <p>{str.slice(searchAlt+13,searchAlt+19)}</p>
        <p>{searchOut2}</p>
        <p>Position in array: {searchAlt2}</p>
        <p>{str.slice(searchAlt2+13,searchAlt2+19)}</p> */}
      </div>
      
    );
  }
}

export default App;
