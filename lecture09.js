// async function getData() {
//     setTimeout(function(){
//         console.log("I am inside the setTimeout function");
//     },1000);
// }
// getData();

async function gettData(){
    //get request-async
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //parse json- async
    // await is used to wait for the promise to resolve
    let data = await response.json();
    console.log(data);
}
// gettData();

//scenario:
//prepare url /api endpoint [jsonplaceholder.typicode.com] ->sync
//await(only with async function )//fetch data->(network call) async
//process data-> print the data->sync

//post request-async
const myHeaders =  new Headers();
myHeaders.append("Content-Type", "application/json");
const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: 'POST',
    body: JSON.stringify({username: 'Harshita Sharma'}),//convert js obj into JSON string so it can be sent in the body of the request
    headers: myHeaders,
};
async function getData(){
    const url = "https://dummyjson.com/posts";
    const response = await fetch(url);
    let data = await response.json();
    console.log("Get data response ",data);
}
async function postData() {
    const response = await fetch(url, options);
    let data1 = await response.json();
    console.log("Post data response: ",data1);
}
async function processData() {
    await postData();
    await getData();
}
processData();
