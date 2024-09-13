import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, editTask, deleteTask }) {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <ToDoItem
            key={index}
            task={task}
            editTask={() => editTask(index)}
            deleteTask={() => deleteTask(index)}
          />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
}

export default ToDoList;
