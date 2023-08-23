import React from "react";
import "./TodoList.css";

const TodoList = ({ data }) => {
  return (
    <div style={{ marginLeft: "10px" }}>
      <table style={{ width: "50%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {data.length !== 0 ? (
            data.map((each, index) => (
              <tr key={each + index * 1.1}>
                <td>{each.id} </td>
                <td>{each.title} </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2}>Task list is empty.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
