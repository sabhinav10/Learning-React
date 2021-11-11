import React from "react";
import ReactDOM from "react-dom";
//Creating functional components,always follow camel case convention used for constructors(first letter of each word is capital)
//Put the ul in the return statement with brackets enclosed to make it more readable
function MyApp(){
  return(
  <ul>
    <li>Ironman</li>
    <li>Batman</li>
    <li>Superman</li>
  </ul>
  );
}
//To render it ,create an instance of the functional component as this:<MyApp/>
ReactDOM.render(<MyApp/>,document.getElementById("root"));

