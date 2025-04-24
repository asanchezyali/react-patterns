import { createReducer } from "@reduxjs/toolkit";
import { addTodo, removeTodo, toggleTodo, editTodo } from "./todoActions";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}

export type TodosState = Todo[];

const initialState: TodosState = [];

const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      const newTodo: Todo = {
        id: state.length + 1,
        text: action.payload,
        completed: false,
        createdAt: new Date().toISOString()
      };
      state.push(newTodo);
    })
    .addCase(removeTodo, (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    })
    .addCase(toggleTodo, (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    })
    .addCase(editTodo, (state, action) => {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    });
});

export default todoReducer;
