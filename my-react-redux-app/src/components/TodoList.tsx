import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo, editTodo } from '../features/todos/todoActions';
import type { RootState } from '../app/store';
import type { Todo } from '../features/todos/todoReducer';
import styles from './TodoList.module.css';

export const TodoList: React.FC = () => {
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');
  
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo.trim()));
      setNewTodo('');
    }
  };

  const startEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleEdit = (id: number) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, text: editText.trim() }));
      setEditingId(null);
      setEditText('');
    }
  };

  return (
    <div className={styles['todo-list']}>
      <h1>Tasks</h1>
      <form onSubmit={handleSubmit} className={styles['todo-form']}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="What needs to be done?"
          className={styles['todo-input']}
        />
        <button type="submit" className={styles['add-button']}>Add</button>
      </form>

      <ul className={styles.todos}>
        {todos.map((todo) => (
          <li 
            key={todo.id} 
            className={`${styles['todo-item']} ${todo.completed ? styles.completed : ''}`}
          >
            {editingId === todo.id ? (
              <div className={styles['edit-form']}>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onBlur={() => handleEdit(todo.id)}
                  onKeyPress={(e) => e.key === 'Enter' && handleEdit(todo.id)}
                  autoFocus
                />
              </div>
            ) : (
              <div className={styles['todo-content']}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleTodo(todo.id))}
                />
                <span 
                  className={styles['todo-text']}
                  onDoubleClick={() => startEditing(todo)}
                >
                  {todo.text}
                </span>
                <button 
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className={styles['delete-button']}
                  aria-label="Delete task"
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
