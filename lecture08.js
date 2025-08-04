//code 1
let firstPromise = new Promise( (resolve, reject) =>{
    setTimeout(function sayMyName(){
        console.log("first promise resolved");
        
    },1000);
     resolve(1);
});
//code 2
let promise1 = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("promise fulfilled");
    }else{
        reject("promise rejected");
    }
});
// promise1.then((message)=>{
//     console.log("The ka messg is: " + message);
// }).catch((error) => {
//     console.log("The error is: " + error);
// });

//code 3
//multiple then()
promise1.then((message)=>{
    console.log("First then: " + message);
    return "Second then message";
}).then((message)=>{
    console.log("Second then: " + message);
    return "Third then message";
}).then((message)=>{
    console.log("Third then: " + message);
}).catch((error) => {
    console.log("The error is: " + error);
});

//code 4
let promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve,1000,"First");
})
let promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve,2000,"Second");
})
let promise4 = new Promise((resolve, reject)=>{
    setTimeout(resolve,3000,"Third");
})
Promise.all([promise1,promise2, promise3, promise4]).then((Value) => {
    console.log("All promises resolved with messages: ", Value);
}).catch((error) => {
    console.log("An error occurred: ", error);
});