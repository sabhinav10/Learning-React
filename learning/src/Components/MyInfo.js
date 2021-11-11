import React from "react"
import MyHeader from "./MyHeader";
import MyBody from "./MyBody";
import MyFooter from "./MyHeader";

function MyInfo(){
  return(
    <div>
      <MyHeader/>
      <MyBody/>
      <MyFooter/>
    </div>
  )
};
//exporting JSX using MyInfo functional component
export default MyInfo;