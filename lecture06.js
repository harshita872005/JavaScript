// let paras = document.querySelectorAll('p');
// for(let i=0;i<paras.length;i++){
//     let para = paras[i];
//     para.addEventListener("click",function(){
//         alert("Paragraph " + (i+1) + " clicked");
//     });
// } 

let mydiv = document.getElementById("wrapper");
document.addEventListener("click",function(event){
    alert("You have clicked on: " + event.target.textContent);
});