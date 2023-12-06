// TaskForm.jsx
// TaskForm.jsx
import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, updateTask, taskToEdit, setTaskToEdit }) => {
  const [task, setTask] = useState({
    key: 0,
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
    status: "In Progress",
  });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    } else {
      resetForm();
    }
  }, [taskToEdit]);

  const resetForm = () => {
    setTask({
      key: 0,
      title: "",
      description: "",
      dueDate: "",
      priority: "Low",
      status: "In Progress",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleDueDateChange = (e) => {
    setTask({ ...task, dueDate: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskToEdit) {
      updateTask(task);
    } else {
      addTask({ ...task, key: Date.now() });
    }

    resetForm();
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">
        {taskToEdit ? "Edit Task" : "Add New Task"}
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Title:
        </label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleInputChange}
          className="form-input mt-1 block w-full rounded-md border-gray-300 px-4 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Description:
        </label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleInputChange}
          className="form-input mt-1 block w-full rounded-md border-gray-300 px-4 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Due Date:
        </label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleDueDateChange}
          className="form-input mt-1 block w-full rounded-md border-gray-300 px-4 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Priority:
        </label>
        <select
          name="priority"
          value={task.priority}
          onChange={handleInputChange}
          className="form-select mt-1 block w-full rounded-md border-gray-300 px-4 py-2"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Status:
        </label>
        <select
          name="status"
          value={task.status}
          onChange={handleInputChange}
          className="form-select mt-1 block w-full rounded-md border-gray-300 px-4 py-2"
        >
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div>
        {taskToEdit ? (
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={() => setTaskToEdit(null)}
          >
            Cancel
          </button>
        ) : null}
        <button
          type="submit"
          className={`bg-${
            taskToEdit ? "green" : "blue"
          }-500 text-white px-4 py-2 rounded`}
        >
          {taskToEdit ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
