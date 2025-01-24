import React, { useState } from "react";

const TaskDetail = ({ task, onClose, onEdit, onUpdate, onDelete }) => {
  const [editMode, setEditMode] = useState(onEdit); // Toggle between view/edit mode
  const [updatedTask, setUpdatedTask] = useState(task); // Local state for task editing
  const [popupVisible, setPopupVisible] = useState(false);

  const handleUpdate = () => {
    console.log(" updated Task ==> ", updatedTask);
    setUpdatedTask(updatedTask);
    setPopupVisible(false);
    setEditMode(false);
    onUpdate(updatedTask);
    onClose();
  };

  const handleDelete = () => {
    onDelete(updatedTask); // Notify the parent about the deletion
    onClose(); // Close the popup
  };

  console.log("task  :: ", task);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded-lg shadow-md w-full max-w-2xl p-8">
        {/* Popup Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-purple-700">
            Task Details
          </h2>
          <button
            className="text-gray-400 hover:text-red-500 transition"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        {/* Task Details */}

        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Task Title
            </label>
            <input
              type="text"
              value={updatedTask.title}
              disabled={!editMode}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, title: e.target.value })
              }
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Task Description
            </label>
            <textarea
              value={updatedTask.description}
              disabled={!editMode}
              onChange={(e) =>
                setUpdatedTask({
                  ...updatedTask,
                  description: e.target.value,
                })
              }
              rows="4"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Assignee
            </label>
            <input
              type="text"
              value={updatedTask.assignee}
              disabled={!editMode}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, assignee: e.target.value })
              }
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <input
              type="text"
              value={updatedTask.status}
              disabled={!editMode}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, status: e.target.value })
              }
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Priority
            </label>
            <input
              type="text"
              value={updatedTask.priority}
              disabled={!editMode}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, priority: e.target.value })
              }
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Creation Date
            </label>
            <input
              type="date"
              value={updatedTask.createdDate}
              disabled={!editMode}
              onChange={(e) =>
                setUpdatedTask({
                  ...updatedTask,
                  createdDate: e.target.value,
                })
              }
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Due Date
            </label>
            <input
              type="date"
              value={updatedTask.dueDate}
              disabled={!editMode}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, dueDate: e.target.value })
              }
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Popup Footer */}
        <div className="mt-6 flex justify-end space-x-4">
          <>
            {!editMode && (
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={onClose}
              >
                Close
              </button>
            )}
            {editMode && (
              <>
                <button
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800"
                  onClick={handleUpdate}
                >
                  Save
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={handleDelete}
                >
                  Delete
                </button>{" "}
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
