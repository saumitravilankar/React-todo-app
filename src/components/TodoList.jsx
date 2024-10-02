import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ taskList, toggleTaskStatus, handleDeleteTask }) => {
  return (
    <div className="my-4 space-y-1">
      {taskList.length ? (
        taskList.map((task, index) => (
          <div
            key={index}
            className={`${
              task.status === "pending"
                ? "bg-yellow-50 hover:bg-yellow-100"
                : "bg-green-300 hover:bg-green-400"
            } flex items-center justify-between w-full rounded-md`}
          >
            <div
              className="flex-1 p-3 cursor-pointer"
              onClick={() => toggleTaskStatus(task.id)}
            >
              <TodoItem title={task.title} status={task.status} index={index} />
            </div>
            <div className="flex items-center justify-end pr-3">
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="danger-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center py-4 text-slate-400">No Tasks Available</p>
      )}
    </div>
  );
};

export default TodoList;
