import React from "react";
import ReactDOM from "react-dom";
//Creating a MyInfo functional component and rendering it
//You need to wrap all elements in a single div or any other html element ,because only one JSX element can be returned and rendered.

function MyInfo(){
  return(
    <div>
      <h1>Hi!! My name is Abhinav😀</h1>
      <p>I'm learning React and it's going awesome</p>
      <ul>The palces I want to vist:
        <li>Paris</li>
        <li>Amsteradam</li>
        <li>Dehradun</li>
      </ul>
    </div>
  )
}
ReactDOM.render(<MyInfo/>,document.getElementById("root"));
