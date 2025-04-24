import { memo, useCallback, useRef, useEffect } from "react";
import { useTodoStore } from "../store/useTodoStore";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoItem = memo(({ id, text, completed, onRemove, onToggle }: TodoItemProps) => (
  <li className={completed ? 'completed' : ''}>
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
        aria-label={`Mark "${text}" as ${completed ? 'incomplete' : 'complete'}`}
      />
      <span>{text}</span>
      <button
        onClick={() => onRemove(id)}
        className="remove-btn"
        aria-label={`Remove "${text}"`}
      >
        ×
      </button>
    </div>
  </li>
));

TodoItem.displayName = 'TodoItem';

export default function TodoList() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { todos, error, addTodo, removeTodo, toggleTodo, setError } = useTodoStore();

  const handleAddTodo = useCallback(() => {
    const text = inputRef.current?.value.trim() || '';
    
    if (text) {
      addTodo(text);
      if (inputRef.current) {
        inputRef.current.value = '';
        inputRef.current.focus();
      }
    } else {
      setError('Please enter a task');
    }
  }, [addTodo, setError]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  }, [handleAddTodo]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="todo-container">
      <em>Minimal Todo List</em>
      <h1>Tasks</h1>
      
      <div className="input-group">
        <input
          ref={inputRef}
          type="text"
          placeholder="What needs to be done?"
          onKeyDown={handleKeyDown}
          aria-label="New task"
        />
        <button 
          onClick={handleAddTodo}
          aria-label="Add task"
        >
          Add
        </button>
      </div>

      {error && (
        <div role="alert" className="error-message">
          {error}
        </div>
      )}

      {todos.length === 0 ? (
        <p className="empty-state">Your task list is empty</p>
      ) : (
        <ul className="todo-list" role="list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              onRemove={removeTodo}
              onToggle={toggleTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}