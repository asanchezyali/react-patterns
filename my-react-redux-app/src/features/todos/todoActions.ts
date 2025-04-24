import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction<string>('todos/addTodo');
export const removeTodo = createAction<number>('todos/removeTodo');
export const toggleTodo = createAction<number>('todos/toggleTodo');
export const editTodo = createAction<{ id: number; text: string }>('todos/editTodo');
