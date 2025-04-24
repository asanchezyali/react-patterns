# Zustand Pattern Example

This project demonstrates state management using Zustand, a lightweight alternative to Redux, with TypeScript integration.

## Features

- **Simple Store Setup**: Minimalistic state management
- **Persistence**: Data persistence with zustand/middleware
- **Type Safety**: Full TypeScript integration
- **Middleware Usage**: Error handling and persistence middleware
- **Immutable Updates**: Proper state update patterns

## Key Concepts Demonstrated

### Store Configuration
- Basic store setup with TypeScript
- Middleware integration
- Action creators
- Persistence configuration

### State Management
- Immutable state updates
- Error handling
- Loading states
- Type-safe selectors

## Project Structure

```
src/
├── store/
│   └── useTodoStore.ts    # Zustand store with todos logic
├── components/
│   └── TodoList.tsx       # Todo list component
└── App.tsx               # Main application
```

## Usage Example

```tsx
import { useTodoStore } from './store/useTodoStore';

function TodoComponent() {
  const { todos, addTodo, removeTodo } = useTodoStore();

  return (
    <div>
      <button onClick={() => addTodo('New Task')}>Add Todo</button>
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Visit `http://localhost:5173` in your browser

## Key Learnings
- Zustand store configuration
- State persistence strategies
- TypeScript integration
- Middleware usage
- Performance considerations with Zustand
