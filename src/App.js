import TodoList from './components/TodoList'
import { CreateTodo } from './components/CreateTodo';
import './App.css';
import { v4 as uuidv4 } from 'uuid'

function App() {
  return (
    <div className="App">
      <TodoList/>
      <CreateTodo />
    </div>
  );
}

export default App;
