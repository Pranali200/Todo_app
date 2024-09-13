import React from 'react';

function ToDoItem({ task, editTask, deleteTask }) {
  return (
    <div className="todo-item">
      <span>{task}</span>
      <button onClick={editTask}>Edit</button>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default ToDoItem;
