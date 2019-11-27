import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 26 },
      { name: "Stephanie", age: 22 }
    ],
    otherState: 'some other value'
  }
  switchNameHandler = (name) => {
    this.setState({
      persons: [
        { name: name, age: 28 },
        { name: "Zahid", age: 26 },
        { name: "Kenan", age: 22 }
      ]
    });
  }

  changeNameHandler = (event) => {
    console.log(event.target);
    
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: event.target.value, age: 26 },
        { name: event.target.value, age: 22 }
      ]
    });
  }
  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    return (
      <div className="App">
        <h1>This is my React Learning application</h1>
        <p>This is the first paragraph</p>
        <button 
        onClick={() => this.switchNameHandler('Orxanilian')}
        style={style}
        >
        Switch Handler
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.changeNameHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Orxan')}
          changed={this.changeNameHandler}
        >
          My hobbies: Racing
          </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          changed={this.changeNameHandler}
        />
      </div>
    );
  }
  //yuxaridaki return asagidaki returne cevrilir runtime da.
  //orijinal varianti ise asagidaki kimidir.
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is React'));
}

export default App;
