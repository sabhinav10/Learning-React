import React from "react";
import ReactDOM from "react-dom";
import ToDoApp from "./Components/ToDoApp"
//Creating a MyInfo functional component and rendering it
//You need to wrap all elements in a single div or any other html element ,because only one JSX element can be returned and rendered.

ReactDOM.render(<ToDoApp/>,document.getElementById("root"));
