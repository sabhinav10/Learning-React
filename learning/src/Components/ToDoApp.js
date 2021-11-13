import React from "react";
import ToDoItem from "./ToDoItem";
import "./styles.css"
function ToDoApp(){
    return(
        <div className = "todo-list">
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
        </div>
    )
}
export default ToDoApp;