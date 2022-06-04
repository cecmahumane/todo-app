import React, { Component } from 'react'
import TodoList from './components/TodoList'
import { CreateTodo } from './components/CreateTodo';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        id: 1234,
        title: "example",
        isCompleted: false
      }
    ]
    this.addTodo = this.addTodo.bind(this);
  }
  
  addTodo = (title) => {
    alert(title)
  }

  render() {
    return (
      <div>
        <TodoList state={this.state}/>
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
