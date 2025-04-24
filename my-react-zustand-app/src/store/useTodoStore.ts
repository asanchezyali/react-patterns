import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
}

interface TodoActions {
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

type TodoStore = TodoState & TodoActions;

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      ...initialState,
      addTodo: (text: string) => {
        if (!text.trim()) {
          set({ error: "Todo text cannot be empty" });
          return;
        }
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: Date.now(),
              text,
              completed: false,
              createdAt: new Date()
            }
          ],
          error: null
        }));
      },
      removeTodo: (id: number) => 
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
          error: null
        })),
      toggleTodo: (id: number) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
          error: null
        })),
      setError: (error: string | null) => set({ error }),
      reset: () => set(initialState),
    }),
    {
      name: 'todo-storage',
      version: 1,
    }
  )
);