// let paras = document.querySelectorAll('p');
// for(let i=0;i<paras.length;i++){
//     let para = paras[i];
//     para.addEventListener("click",function(){
//         alert("Paragraph " + (i+1) + " clicked");
//     });
// } 

let mydiv = document.getElementById("wrapper");
document.addEventListener("click",function(event){
    if(event.target.tagName === "SPAN"){
        event.target.style.cssText ="background-color: yellow; color: red; font-size:20px;";
    }if(event.target.tagName === "P"){
        event.target.style.cssText = "background-color: green; color: white; font-size:20px;";
    }
    alert("You have clicked on: " + event.target.textContent);
});