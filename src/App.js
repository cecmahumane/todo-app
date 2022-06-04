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
          isCompleted: false
        }
      ]
    }
    this.addTodo = this.addTodo.bind(this);
  }
  
  addTodo = (title) => {
    alert(title)
    this.setState({ 
      todos: [
        ...this.state.todos,
        {
        title: title,
        id: uuidv4(),
        isCompleted: false
        }
      ]
      
    })
  }

  render() {
    return (
      <div>
        <TodoList state={this.state.todos}/>
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
