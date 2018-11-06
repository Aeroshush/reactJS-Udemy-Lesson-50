import React, { Component } from 'react';

import './App.css';
import Person from'./Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Hakie', age: 49},
      {name: 'Aaron', age: 31},
      {name: 'JOJO', age: 11}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    
    this.setState({
      persons:[
        {name: newName, age: 49},
        {name: 'Child Mongo', age: 31},
        {name: 'Freddie', age: 11}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name: 'Hakie', age: 49},
        {name: event.target.value, age: 31},
        {name: 'Freddie', age: 11}
      ]
    })
  }
togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };
    return (
      <div className="App">
        <h1> Hi, I am todo</h1> 
        <button 
        style={style}
        onClick={() => this.togglePersonsHandler}>Toggle Persons</button>
        {
          this.state.showPersons === true ?
        <div>
          <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        
        changed={this.nameChangedHandler}/>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
        </div> : null
      }
      </div>
    );
    
  }
}

export default App;
