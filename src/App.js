// App.jsx
import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './styles.css'; // Import the Tailwind CSS styles

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setFilteredTasks([...tasks, newTask]);
  };

  const editTask = (task) => {
    setTaskToEdit(task);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.key === updatedTask.key ? updatedTask : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
    setTaskToEdit(null);
  };

  const deleteTask = (key) => {
    const updatedTasks = tasks.filter((task) => task.key !== key);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
    setTaskToEdit(null);
  };

  const searchTasks = (query) => {
    const filtered = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Task todo</h1>

      <TaskForm
        addTask={addTask}
        updateTask={updateTask}
        taskToEdit={taskToEdit}
        setTaskToEdit={setTaskToEdit}
      />

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search tasks"
          className="px-4 py-2 border rounded mr-2"
          onChange={(e) => searchTasks(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setFilteredTasks([...tasks])}
        >
          Reset
        </button>
      </div>

      <TaskList tasks={filteredTasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
