let fheading = document.createElement("h1");
fheading.textContent = "This is a new heading";

let fpara = document.createElement("p");
fpara.textContent = "This is a new paragraph";

let body = document.querySelector("body");
body.appendChild(fheading);
body.appendChild(fpara);
