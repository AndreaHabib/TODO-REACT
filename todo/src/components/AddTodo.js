import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    render() {
        return (
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input 
                style={{flex: '10', padding: '5px'}}
                type="text" 
                name="title" 
                placeholder="Add TODO"
                value={this.state.title}
                onChange={this.onChange}
                />
                <input type="submit" value="submit" className="btn" style={{flex: '1'}}/>
            </form>
        )
    }
}

export default AddTodo
