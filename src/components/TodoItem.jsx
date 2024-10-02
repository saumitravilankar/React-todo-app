import React from "react";

const TodoItem = ({ title, status, index }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <p
        className={`${
          status === "pending" ? "text-yellow-600" : "text-green-600"
        } col-span-3 font-semibold text-lg flex-1 truncate`}
      >
        {title}
      </p>
      <div className="flex items-center justify-center flex-1">
        <span
          className={`${
            status === "pending" ? "bg-yellow-600" : "bg-green-600"
          } text-white px-2 py-1 text-sm capitalize rounded-full`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
