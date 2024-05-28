import React, { useState } from "react";

export const Editt = ({ editTodo, task }) => {
  const [value, setValue] = useState(task || "");

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim()) {
      editTodo(value);
      setValue("");
    }
  }

  return (
    <form className="Todoform" onSubmit={handleSubmit}>
      <input type='text' className='todo-input' value={value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)} />
      <button type="submit" className="todo-btn">Update Task</button>
    </form>
  );
}

export default Editt;
