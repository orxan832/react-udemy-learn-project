import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 26},
      {name: "Stephanie", age: 22}
    ]
  }
  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: "Orxan", age: 28},
        {name: "Zahid", age: 26},
        {name: "Kenan", age: 22}
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <h1>This is my React Learning application</h1>
        <p>This is the first paragraph</p>
        <button onClick={this.switchNameHandler}>Switch Handler</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
  //yuxaridaki return asagidaki returne cevrilir runtime da.
  //orijinal varianti ise asagidaki kimidir.
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is React'));
}

export default App;
