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
                    <button style={btnStyle} onClick={this.props.delItem.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}
todoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right' 
}

export default todoItem
