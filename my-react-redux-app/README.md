# Redux Pattern with Redux Toolkit

This project demonstrates modern Redux patterns using Redux Toolkit (RTK) in a TypeScript environment, implemented as a Todo application.

## Features

- **Complete Todo Management**: Full CRUD operations for todos
- **Redux Toolkit Integration**: Uses modern Redux best practices
- **Type-Safe Actions**: Fully typed action creators and reducers
- **Modular State Management**: Feature-based state organization

## Key Concepts Demonstrated

### Redux Store Setup
- Configuring store with Redux Toolkit
- TypeScript type definitions for RootState
- Proper action typing

### Feature-based Structure
- Organized by feature rather than type
- Separation of actions and reducers
- Proper use of Redux Toolkit's `createReducer`

## Project Structure

```
src/
├── app/
│   └── store.ts                # Redux store configuration
├── features/
│   └── todos/
│       ├── todoReducer.ts      # Todo reducer and state types
│       └── todoActions.ts      # Todo action creators
├── components/
│   └── TodoList.tsx           # Main todo list component
└── App.tsx                    # Root component
```

## Usage Example

```tsx
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './features/todos/todoActions';
import type { RootState } from './app/store';

function TodoComponent() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  return (
    // Component JSX
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
- Modern Redux patterns with Redux Toolkit
- Type-safe Redux implementation
- State management best practices
- Action creator patterns
- Selector patterns with TypeScript
