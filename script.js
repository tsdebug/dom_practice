let heading = document.getElementById("heading"); //h1
console.log(heading); 
console.dir(heading);

let headings = document.getElementsByClassName("myclass");
console.log(headings);
console.dir(headings);

let paras = document.getElementsByTagName("p");
console.dir(paras);

let elements = document.querySelector("p"); //1st element
console.dir(elements);

// let elements = document.querySelector(".myclass"); //all elements
// console.dir(elements); 

function displayMsg(){
    console.log("The button message was displayed by function.");
}

//tagName - returns the tag for element nodes
// innerText - returns the text content of the element and akk its children
//innerHTML - returns the plain text or HTML contents in the element
// textContent - returns textual content even for hidden elements

console.dir(document.body.firstChild);

// DOM Tree - text nodes, comment nodes and element nodes

let div = document.querySelector("div");
console.dir(div);

let h4 = document.querySelector("h4");
console.dir(h4.innerText);

h4.innerText = h4.innerText + " from Tanushree";