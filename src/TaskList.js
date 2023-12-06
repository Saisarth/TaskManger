// TaskList.jsx
import React from 'react';

const TaskList = ({ tasks, editTask, deleteTask }) => {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.key}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.dueDate}</td>
            <td>{task.priority}</td>
            <td>{task.status}</td>
            <td>
              <button
                className="bg-green-500 text-white px-2 py-1 mr-2 rounded"
                onClick={() => editTask(task)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => deleteTask(task.key)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
