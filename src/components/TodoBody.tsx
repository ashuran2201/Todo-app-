import React from "react";
import { Provider as TodoProvider } from "../context/TodoContext";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

export default function TodoBody() {
    <TodoProvider>
        <h1>Todo</h1>
      <AddTodo />
      <TodoList />
    </TodoProvider>
}