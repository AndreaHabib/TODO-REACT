import React, {Component} from 'react';
import TodoItem from './todoItem';
import PropTypes from 'prop-types';
class Todos extends Component {
  render() {
    return this.props.todos.map((todo) =>(
        <TodoItem key={todo.id} todo={todo} isComplete={this.props.isComplete} delItem={this.props.delItem}/>
    ));
 }
}
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos;
