import TodoList from './components/TodoList'
import './App.css';
import { v4 as uuidv4 } from 'uuid'

function App() {
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;
