import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  render() {
    return this.props.state.map((todo) => (
      <Todo editTodo={this.props.editTodo} 
            deleteTodo={this.props.deleteTodo} 
            markCompleted={this.props.markCompleted}
            toEdit={todo.toEdit}
            todo={todo.title}
            key={todo.id}
            id={todo.id}
            />
    ))
  }
}
