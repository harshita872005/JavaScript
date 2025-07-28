//Lecture 01: DOM Manipulation

    //Acessing DOM elements
    let h1 = document.getElementById("h1");
    let pera = document.getElementById("pera");
    //changing the content of the elements
    h1.innerHTML = "This heading is changed";
    pera.innerHTML= "This pera is changed";
    //print the elements to the console
    console.log(h1.innerHTML);
    console.log(pera.innerHTML);
    //fdiv
    let element = document.querySelector('#fdiv');
    console.log(element.innerText);
    console.log(element.textContent);