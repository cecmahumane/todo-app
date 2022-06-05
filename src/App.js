import React, { Component } from 'react'
import TodoList from './components/TodoList'
import { CreateTodo } from './components/CreateTodo';
import './App.css';
import { v4 as uuidv4 } from 'uuid'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: "example",
          id: 123,
          isCompleted: false,
          toEdit: false
        }
      ]
    }
    this.addTodo = this.addTodo.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  
  addTodo = (title) => {
    this.setState({ 
      todos: [
        ...this.state.todos,
        {
        title: title,
        id: uuidv4(),
        isCompleted: false,
        toEdit: false
        }
      ]
      
    })
  }

  editTodo = (id, title) => {
    this.setState({
      todos:
      this.state.todos.map(todo => {
        if (todo.id === id) {
          if (todo.toEdit === false) {
            todo.toEdit = !todo.toEdit
          } else {
            todo.toEdit = !todo.toEdit
            todo.title = title
          }
        }
        return todo
      })
    })
    console.log(id , title)
  }

  deleteTodo = (id) => {
    alert('delete button working')
    this.setState({
      todos:
      [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  markCompleted = (id) => {
    this.setState({ 
      todos: 
      this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted
      }
      return todo
    })})
  }




  render() {
    return (
      <div>
        <TodoList state={this.state.todos}
                  markCompleted={this.markCompleted}
                  editTodo={this.editTodo}
                  deleteTodo={this.deleteTodo}
                  />
        <CreateTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}








// import TodoList from './components/TodoList'
// import { CreateTodo } from './components/CreateTodo';
// import './App.css';
// import { v4 as uuidv4 } from 'uuid'

// function App() {

//   let addTodo = (title, id) => {
//     alert(title, id)
//   }

//   return (
//     <div className="App">
//       <TodoList/>
//       <CreateTodo />
//     </div>
//   );
// }

// export default App;
