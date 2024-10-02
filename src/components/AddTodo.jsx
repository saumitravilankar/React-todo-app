import React, { useEffect, useState } from "react";

const AddTodo = ({ task, setTask, handleAddTask }) => {
  return (
    <form className="py-4 w-full flex items-center gap-2">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type="text"
        placeholder="Enter new task"
        className="w-full border p-2 rounded-md"
      />
      <button
        type="submit"
        disabled={!task}
        onClick={handleAddTask}
        className="button"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;
