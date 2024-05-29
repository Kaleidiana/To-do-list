import React, { useState } from 'react';
import Editt from './Editt'; // Adjust the import path as necessary

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React" },
    { id: 2, task: "Build a Todo App" },
  ]);

  const editTodo = (id, newTask) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, task: newTask } : todo)));
  };

  return (
    <div>
      {todos.map(todo => (
        <Editt key={todo.id} editTodo={editTodo} task={todo} />
      ))}
    </div>
  );
};

export default Todo;
