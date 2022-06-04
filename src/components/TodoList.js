import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  constructor(props) {
    super(props); 
      
      this.editTodo = this.editTodo.bind(this);
      this.deleteTodo = this.deleteTodo.bind(this);
      // this.markCompleted = this.markCompleted.bind(this);
  }

  editTodo = () => {
    alert('edit button working')
  }

  deleteTodo = () => {
    alert('delete button working')
  }
  
  // markCompleted = (id) => {
  //   // alert('completed button working')
  //   this.props.setState({ todos: this.props.state.map(todo => {
  //     if (todo.id === id) {
  //       todo.isCompleted = !todo.isCompleted
  //     }
  //     alert("status changed")
  //     return todo
  //   })})
  // }

  render() {
    return this.props.state.map((todo) => (
      <Todo editTodo={this.editTodo} 
            deleteTodo={this.deleteTodo} 
            markCompleted={this.props.markCompleted}
            todo={todo.title}
            key={todo.id}
            id={todo.id}
            />
    ))
  }
}




// (
//   <div>
//     <Todo editTodo={this.editTodo} deleteTodo={this.deleteTodo} markCompleted={this.markCompleted}/>
//   </div>

// )