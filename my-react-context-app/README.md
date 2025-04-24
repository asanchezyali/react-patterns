# React Context Pattern Example

This project demonstrates the implementation of React's Context API along with custom hooks, showcasing a practical notification system.

## Features

- **Global Notification System**: Manage notifications across your application
- **Custom Hook Pattern**: `useNotification` hook for easy access to notification context
- **TypeScript Support**: Fully typed implementation
- **Auto-dismiss**: Notifications automatically dismiss after 3 seconds

## Key Concepts Demonstrated

### Context Provider
- Creation of a typed context using `createContext`
- Provider pattern implementation
- State management within context

### Custom Hook
- Encapsulated context consumption
- Type-safe hook implementation
- Error handling for usage outside provider

## Project Structure

```
src/
├── contexts/
│   └── NotificationContext.tsx    # Context definition and provider
├── hooks/
│   └── useNotification.ts        # Custom hook for using notifications
├── components/
│   ├── Notification.tsx          # Notification display component
│   └── NotificationButton.tsx    # Component to trigger notifications
└── App.tsx                       # Main application component
```

## Usage Example

```tsx
import { useNotification } from './hooks/useNotification';

function MyComponent() {
  const { showNotification } = useNotification();

  const handleClick = () => {
    showNotification('Hello from Context!');
  };

  return (
    <button onClick={handleClick}>
      Show Notification
    </button>
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
- How to implement type-safe context in React
- Proper context provider patterns
- Custom hook creation and usage
- Performance considerations with Context
