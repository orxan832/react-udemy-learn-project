import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manu", age: 26 },
      { id: 3, name: "Stephanie", age: 22 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              click={this.deletePersonHandler.bind(this, index)}
              changed={(event) => this.changeNameHandler(event, person.id)}
            />
          })}
        </div>
      );
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>This is my React Learning application</h1>
          <p className={classes.join(' ')}>This is the first paragraph</p>
          <button className="btn"
            onClick={this.togglePersonsHandler}
          >
            Toggle Persons
        </button>
          {persons}
        </div>
    );
  }
  //yuxaridaki return asagidaki returne cevrilir runtime da.
  //orijinal varianti ise asagidaki kimidir.
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is React'));
  //ternary expressiondan istifade ederken bize yalniz if lazimdirsa && isaresinden istifade edirik.
  //if else zamani ise if evezine ?, else evezine ise : isaresinden isrifade edirik.
  //class-based componentlerde setState funksiyasi zamani biz her hansi state-i deyiserken digerlerine toxunmasaq
  //bele diger state-ler itmir. deyisdirdiyimiz state-i digerleri ile merge edir. yeni birlesdirir.
  //useState funksiyasi zamani ise bir state-i deyiserken diger state-ler itir. bunun ucun spread operatordan
  //istifade etmek lazimdir (...).
  //map() funksiyasinda list ucun return yazmaq lazimdi hemise.
}

export default App;
