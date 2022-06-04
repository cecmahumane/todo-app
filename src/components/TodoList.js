import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  constructor(props) {
    super(props); 
      
  }

  render() {
    return this.props.state.map((todo) => (
      <Todo editTodo={this.props.editTodo} 
            deleteTodo={this.props.deleteTodo} 
            markCompleted={this.props.markCompleted}
            todo={todo.title}
            key={todo.id}
            id={todo.id}
            />
    ))
  }
}
