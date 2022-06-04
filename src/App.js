import React, { Component } from 'react'
import TodoList from './components/TodoList'
import { CreateTodo } from './components/CreateTodo';
import './App.css';


export default class App extends Component {
  
  
  
  render() {
    return (
      <div>
        <TodoList/>
        <CreateTodo />
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
