import React, {Component} from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
      id: 1,
      title: 'Take out the trash',
      completed: false
      },
      {
      id: 2,
      title: 'Do the homework',
      completed: false
      },
      {
      id: 3,
      title: 'Finish the chores',
      completed: false
      }
    ]
  }
  delItem = (id) => {
    this.setState( { todos: [...this.state.todos.filter(todo => todo.id !== id)] } );
  }
  isComplete = (id) => {
    this.setState( {todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })} )
  }
  render() {
  return (
    <div className="App">
      <Todos todos={this.state.todos} isComplete={this.isComplete} delItem={this.delItem}/>
    </div>
  );
 }
}

export default App;
