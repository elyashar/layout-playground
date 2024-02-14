// Select the select element with id 'select-align-content'.
let selElem = document.getElementById("select-align-content");

// Select the div with class 'cont-4'.
let cont4 = document.querySelector(".cont-4");

// Get the value of the select element.
selElem.addEventListener("change", () => {
    // Add the value to the div with class 'cont-4'.
    cont4.style.alignContent = selElem.value;
});

