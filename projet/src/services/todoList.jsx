import React, { useState } from 'react';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, done: false }]);
      toast.success('Task added!', { autoClose: 2000 });
      setTask('');
    }
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, done: !t.done } : t
    );
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, idx) => (
          <li
            key={idx}
            style={{ textDecoration: task.done ? 'line-through' : 'none' }}
          >
            <span onClick={() => toggleTask(idx)}>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
