import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  constructor(props) {
    super(props); 
      this.state = {
        todoTitle: [],
        completed: []
      }
      this.editTodo = this.editTodo.bind(this);
      this.deleteTodo = this.deleteTodo.bind(this);
      this.markCompleted = this.markCompleted.bind(this);
  }

  editTodo = () => {
    alert('edit button working')
  }

  deleteTodo = () => {
    alert('delete button working')
  }
  
  markCompleted = () => {
    alert('completed button working')
  }

  render() {
    return (
      <div>
        <p>TodoList</p>
        <Todo editTodo={this.editTodo} deleteTodo={this.deleteTodo} markCompleted={this.markCompleted}/>
      </div>

    )
  }
}
