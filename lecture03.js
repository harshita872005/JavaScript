  let mydiv = document.querySelector('#mydiv');
    let newElement = document.createElement('span');
    newElement.textContent = "This is a new span Element";
    // Insert the new element before the first child of mydiv
    // mydiv.insertAdjacentElement('afterbegin', newElement);

    //insert the new element before starting of the mydiv
    // mydiv.insertAdjacentElement('beforebegin',newElement);
    
    // Insert the new element after the last child of mydiv
    // mydiv.insertAdjacentElement('beforeend',newElement);
    
    // Insert the new element after the mydiv
    mydiv.insertAdjacentElement('afterend',newElement);