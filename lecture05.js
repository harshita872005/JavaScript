
// function changeText(){
//     let fpara = document.getElementById("fpara");
//     fpara.textContent = "Hello harshita";
// }
//  let fpara = document.getElementById("fpara");
//  fpara.addEventListener("click", changeText);

 //another way to add event listener
let fpara = document.getElementById("fpara");
fpara.addEventListener("click", function(){
    fpara.textContent = "Mouse is clicked";
    fpara.style.cssText = "background-color: yellow; color: red; font-size:20px;";
});

let spara = document.getElementById("spara");
spara.addEventListener("mouseover",function(){
    spara.textContent = "Mouse is over me";
    spara.style.cssText = "background-color: green; color: white; font-size:20px;";
});

let tpara = document.getElementById("tpara");
tpara.addEventListener("mouseout",function(){
    tpara.textContent = "Mouse is out from me";
    tpara.style.cssText = "background-color: blue; color: white; font-size:20px;";
});

let lpara = document.getElementById("lpara");
lpara.addEventListener("mousemove",function(){
    lpara.textContent = "Mouse is moving from me";
    lpara.style.cssText = "background-color: orange; color: white; font-size:20px;";
});

//Keyboard event
let key1 = document.getElementById("key1");
key1.addEventListener("keydown",function(){
    key1.textContent = "Key is pressed down";
    key1.style.cssText = "background-color: pink; color: black; font-size:20px;";
});

let key2 = document.getElementById("key2");
key2.addEventListener("keyup",function(){
    key2.textContent = "key is released";
    key2.style.cssText = "background-color: purple; color: white; font-size:20px;";
});

let key3 = document.getElementById("key3");
key3.addEventListener("keypress",function(){
    key3.textContent = "Key is pressed";
    key3.style.cssText = "background-color: cyan; color: black; font-size:20px;";
});

let ancher = document.getElementById("link");
ancher.addEventListener("click",function(event){
    event.preventDefault();// Prevent the default action of the link
    ancher.textContent = "Link is clicked";
    ancher.style.cssText = "background-color: red; color: white; font-size:20px;";
});
