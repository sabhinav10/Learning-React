import React from "react";
//This appliaction tells you what time of day it is.
function Greetings(){
const firstName = "Abhinav";
const lastName = "Singh";
let timeOfDay;
const date = new Date();
const hours = date.getHours();
console.log(hours)
if( 6 <= hours && hours < 12){
    timeOfDay ="morning";
}
else if(12 <= hours && hours <=18){
    timeOfDay ="afternoon";
}
else{
    timeOfDay ="night";
}
return (
//    JSX             JAVASCRIPT           JSX       JAVASCRIPT
    <h1>Hello {firstName + " "+ lastName } Good {" " + timeOfDay}</h1>
)
}
export default Greetings;