import React, { useState } from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex items-center justify-between w-full pb-4 border-b">
      <h1 className="font-semibold capitalize text-xl">{filter} tasks</h1>
      <div className="flex items-center gap-2">
        <label className="font-semibold" htmlFor="status">
          Filter
        </label>
        <select
          onChange={(e) => setFilter(e.target.value)}
          name="status"
          className=" outline-none text-sm"
        >
          <option value={"all"}>All</option>
          <option value={"pending"}>Pending</option>
          <option value={"completed"}>Completed</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
