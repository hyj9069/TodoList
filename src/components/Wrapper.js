import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

function Wrapper() {
  const [todos, setTodos] = useState([]);

  const addItem = (newTodo) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        task: newTodo,
        completed: false,
      },
    ]);
  };
  const removeItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map(
        (todo) => ({
          ...todo,
          completed: todo.id === id ? !todo.completed : todo.completed,
        })
        // 방법1
        // map(() => {return {a:1, b:2}})
        // map(() => ({a:1, b:2}))

        // 방법2
        // todo.id === todos[0].id? {...todo, completed :!todo.completed} : todo
      )
    );
  };
  const editCompletedItem = (id, newTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task: newTodo } : todo)));
  };

  return (
    <div className="wrapper">
      <TodoHeader />
      <TodoAdd addItem={addItem} />
      <TodoList todos={todos} removeItem={removeItem} toggleCompleted={toggleCompleted} editCompletedItem={editCompletedItem} />
    </div>
  );
}

export default Wrapper;
