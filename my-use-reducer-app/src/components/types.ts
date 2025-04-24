export type Todo = {
  id: number;
  text: string;
}

export type TodoState = {
  todos: Todo[];
}

export type TodoAction = 
  | { type: "ADD_TODO"; text: string }
  | { type: "REMOVE_TODO"; id: number }
  | { type: "RESET" };