import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import './style.css';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const editTask = (index) => {
    const updatedTask = prompt('Edit the task:', tasks[index]);
    if (updatedTask) {
      const newTasks = [...tasks];
      newTasks[index] = updatedTask;
      setTasks(newTasks);
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
      {tasks.length > 0 && <button onClick={deleteAllTasks}>Delete All</button>}
    </div>
  );
}



export default App;
