import React from "react"
import ToDoItem from "./ToDoItem";
import "./"

function ToDoApp(){
  return(
    <div className = "todo-list">
      <ToDoItem/>
      <ToDoItem/>
      <ToDoItem/>
      <ToDoItem/>
    </div>
  )
};
//exporting JSX using MyInfo functional component
export default ToDoApp;