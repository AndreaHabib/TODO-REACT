import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Todos from './Todos';
export class todoItem extends Component {
    getStyle = () => {
        return {
        backgroundColor: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }

    }
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.isComplete.bind(this, id)}/> {' '}
                    {title}
                </p>
            </div>
        )
    }
}
todoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default todoItem
