import { useReducer, useState, useCallback } from "react";
import { todoReducer, initialState } from './todoReducer';

const emojiMap: Record<string, string> = {
  eat: "🍔",
  sleep: "🛌",
  exercise: "🏋🏼‍♀️",
};

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = useCallback(() => {
    const mappedText = emojiMap[todoText.toLowerCase()];
    if (mappedText?.trim()) {
      dispatch({ type: "ADD_TODO", text: mappedText });
      setTodoText("");
    }
  }, [todoText]);

  const handleRemoveTodo = useCallback((id: number) => {
    dispatch({ type: "REMOVE_TODO", id });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: "RESET" });
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  }, [handleAddTodo]);

  return (
    <div className="container">
      <div className="header">
        <h1>Emoji Tasks</h1>
        <p className="subtitle">Try typing: eat, sleep, or exercise</p>
      </div>

      <div className="input-group">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What's your next task?"
        />
        <button onClick={handleAddTodo}>Add</button>
        <button onClick={handleReset} className="reset">Clear</button>
      </div>

      {state.todos.length === 0 ? (
        <div className="empty-state">
          No tasks yet. Add your first task above!
        </div>
      ) : (
        <ul className="todo-list">
          {state.todos.map((todo) => (
            <li
              key={todo.id}
              className="todo-item"
              onClick={() => handleRemoveTodo(todo.id)}
              title="Click to remove"
            >
              <span className="emoji">{todo.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
