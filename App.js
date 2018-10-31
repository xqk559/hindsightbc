import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './doge2.jpg';


const reactStringReplace = require('react-string-replace')
const fs = require('fs');

class App extends Component {
  state = {
    Day: null,
    Month: null,
    Year: null
  }


dayHandler = (event) => {
  this.setState( {
    Day: event.target.value
  })
}
monthHandler = (event) => {
  this.setState( {
    Month: event.target.value
  })
}
yearHandler = (event) => {
  this.setState( {
    Year: event.target.value
  })
}


  render() {
    var Day = "Day";

    const reactStringReplace = require('react-string-replace')

  const text = 'link';
  let replacedText;

  replacedText = reactStringReplace(Day, "Day", (match, i) => (
    <a>not day</a>
  ));

let Student;

let data;



//var a = new XMLHttpRequest();
//a.open("GET","./output.json",true);
//a.onreadystatechange = function() {
//  if( this.readyState === 4) {
//    if( this.status === 200) {
//      var json = window.JSON ? JSON.parse(this.reponseText) : eval("("+this.responseText+")");
      // do something with json
//    }
//    else alert("HTTP error "+this.status+" "+this.statusText);
//  }
//}
//a.send();




    return (
      <div className="App">
        <script src="output.json">
        </script>
        <h33 className="rainbow">Hindsight BC</h33>
          <br></br>
          <br></br>
        <img src={require('./doge2.jpg')} width="200" height="200" />
          <br></br>
          <br></br>
          <br></br>
        <np id="demo">{Day}: </np>
        <input type="text" className="Day" onChange={this.dayHandler} key="day"/>
          <np>{' '}</np>
          <np>Month: </np>
        <input type="text" className="Day" onChange={this.monthHandler} key="month"/>
          <np>{' '}</np>
          <np>Year: </np>
        <input type="text" className="Year" onChange={this.yearHandler} key="year"/>
          <br></br>
        <np>{this.state.Day}</np>
          <br></br>
        <np>{this.state.Month}</np>
          <br></br>
        <np>{this.state.Year}</np>
          <br></br>
        <np>{text}</np>
          <br></br>
        <np>{replacedText}</np>
          <br></br>
      </div>
    );
  }
}

export default App;
