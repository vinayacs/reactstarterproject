import React, { Component } from 'react';
import Todos from './components/Todos';
import Donut from './chartkit/components/Donut';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take our the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Lunch with Girl Friend',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting a friend',
        completed: false
      },
      {
        id: 4,
        title: 'Set Alarm',
        completed: false
      }
  ]
  }
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <p>Todo List</p>
        <Donut />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
