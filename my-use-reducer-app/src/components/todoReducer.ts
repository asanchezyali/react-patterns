import { TodoState, TodoAction } from './types';

export const initialState: TodoState = {
  todos: [],
};

export function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case "ADD_TODO": {
      if (!action.text.trim()) {
        return state;
      }
      const newTodo = { 
        id: Date.now(),
        text: action.text 
      };
      return {
        todos: [...state.todos, newTodo]
      };
    }
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    case "RESET":
      return initialState;
    default: {
      const _exhaustiveCheck: never = action;
      throw new Error(`Unhandled action type: ${_exhaustiveCheck}`);
    }
  }
}