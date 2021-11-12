import React from "react";
//This appliaction tells you what time of day it is.
function Greetings(){
const firstName = "Abhinav";
const lastName = "Singh";
let timeOfDay;
const date = new Date();
const hours = date.getHours();
console.log(hours)

//Javscript object created for styling
const styles ={
    fontSize : 24
};
if( 6 <= hours && hours < 12){
    timeOfDay ="morning";
    styles.color = "#04756f"
}
else if(12 <= hours && hours <=18){
    timeOfDay ="afternoon";
    styles.color = "#2e097f"
}
else{
    timeOfDay ="night";
    styles.color = "#d90000"
}
return (
//    JSX             JAVASCRIPT           JSX       JAVASCRIPT
    <h1 style ={styles}>Hello {firstName + " "+ lastName } Good {" " + timeOfDay}!</h1>
)
}
export default Greetings;