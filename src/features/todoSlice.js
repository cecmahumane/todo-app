import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    todos: [
        {
          title: "example",
          id: 123,
          isCompleted: false,
          toEdit: false
        }
      ]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todos.filter(todo => todo.id !== action.payload.id)
        }
    }
})

export const selectTodo = (state) => state.todos;

export const { addTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer