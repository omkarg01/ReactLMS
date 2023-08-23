import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [taskList, setTaskList] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTaskList(data);
    console.log(data);
  };

  return (
    <div>
      <h1 style={{marginLeft : '15%'}}>Todo List</h1>
      <TodoList data={taskList}></TodoList>
    </div>
  );
};

export default TodoApp;
