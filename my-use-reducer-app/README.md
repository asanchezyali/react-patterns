# useReducer Pattern Example

This project demonstrates local state management using React's useReducer hook, implemented as a fun emoji-based todo application.

## Features

- **Type-Safe Reducer**: Fully typed actions and state
- **Emoji Integration**: Converts text inputs to emojis
- **Local State Management**: Efficient state updates
- **Action Pattern**: Clean action type definitions

## Key Concepts Demonstrated

### Reducer Pattern
- Action type definitions
- State type safety
- Immutable updates
- Action creators

### Component Architecture
- Clean separation of reducer logic
- Component state management
- Event handling patterns
- TypeScript integration

## Project Structure

```
src/
├── components/
│   ├── TodoList.tsx     # Main todo component
│   ├── todoReducer.ts   # Reducer logic and types
│   └── types.ts         # TypeScript definitions
└── App.tsx             # Application wrapper
```

## Usage Example

```tsx
type TodoAction = 
  | { type: 'ADD_TODO'; text: string }
  | { type: 'REMOVE_TODO'; id: number }
  | { type: 'RESET' };

// Inside your component
const [state, dispatch] = useReducer(todoReducer, initialState);

// Adding a todo
dispatch({ type: 'ADD_TODO', text: 'exercise' }); // Converts to 🏋🏼‍♀️

// Removing a todo
dispatch({ type: 'REMOVE_TODO', id: 1 });

// Resetting all todos
dispatch({ type: 'RESET' });
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

## Key Features
- Type "eat" to get 🍔
- Type "sleep" to get 🛌
- Type "exercise" to get 🏋🏼‍♀️

## Key Learnings
- useReducer implementation patterns
- TypeScript with reducers
- Action type definitions
- State management best practices
- Clean code organization
