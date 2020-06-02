import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo';
import {v4 as uuidv4} from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
      id: uuidv4(),
      title: 'Take out the trash',
      completed: false
      },
      {
      id: uuidv4(),
      title: 'Do the homework',
      completed: false
      },
      {
      id: uuidv4(),
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

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }
  render() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} isComplete={this.isComplete} delItem={this.delItem}/>
      </div>
    </div>
  );
 }
}

export default App;
