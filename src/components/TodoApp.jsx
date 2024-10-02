import React, { useEffect, useMemo, useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Filter from "./Filter";

const TodoApp = () => {
  const [taskId, setTaskId] = useState(0);
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("taskList")) || [];
    if (tasks.length) {
      setTaskList(tasks);
      setTaskId(tasks[tasks.length - 1].id);
    } else {
      localStorage.setItem("taskList", JSON.stringify([]));
    }
  }, []);

  const handleAddTask = () => {
    try {
      const storedTasksList = JSON.parse(localStorage.getItem("taskList"));
      {
        const taskBody = {
          id: taskId + 1,
          title: task,
          status: "pending",
        };
        localStorage.setItem(
          "taskList",
          JSON.stringify([...storedTasksList, taskBody])
        );
        setTaskList((prev) => [...prev, taskBody]);
        setTaskId((prev) => prev + 1);
        setTask("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  function toggleTaskStatus(id) {
    try {
      const updatedTaskList = taskList.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: task.status === "pending" ? "completed" : "pending",
          };
        } else {
          return task;
        }
      });
      setTaskList(updatedTaskList);
      localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    } catch (error) {
      console.log(error);
    }
  }

  function handleDeleteTask(id) {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
  }

  const updatedTaskList = useMemo(() => {
    if (filter === "all") {
      return taskList.filter((task) => task);
    } else {
      return taskList.filter((task) => task.status === filter);
    }
  }, [filter, taskList]);

  return (
    <>
      <AddTodo task={task} setTask={setTask} handleAddTask={handleAddTask} />
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList
        taskList={updatedTaskList}
        toggleTaskStatus={toggleTaskStatus}
        handleDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default TodoApp;
