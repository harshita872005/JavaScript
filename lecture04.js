//changing css properties using style
let heading = document.getElementById("fdiv");
heading.style.color = "red";
heading.style.fontSize = "20px";
let paraelement = document.getElementById("spara");
paraelement.style.backgroundColor = "blue";

//changing css properties uisng cssText to handle multiple styles
let secondElement = document.getElementById('sdiv');
secondElement.style.cssText = "color: white; font-size: 25px; background-color:black; border: 2px solid black; padding: 10px;";

//setattribute and getAttribute methods
let firstElement= document.querySelector('#fdiv');
firstElement.setAttribute('class','divclass');
console.log(firstElement.getAttribute('class'));