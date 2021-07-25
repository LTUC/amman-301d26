'use strict';

const normal = document.getElementById("nomral");

// first argument : event action
// second argument: callback function
// callback functions are functions passed as a parameter
// can be passed as a anonymous function or a named function

// Normal function uses ES5 version 
normal.addEventListener('click', function (event) {
    alert('Got Clicked')
});

// writing the same code but in arrow function
// ES6 feature

const arrow = document.getElementById("arrow");

// Arrow functions are functions that are written in a shorter way
// mainly its a type of anonymous functions
// Arrow functions do not support hoisting

// when you have a body for the arrow function, if the function has operations in it, you will need to have the return key
// arrow.addEventListener('click', (event) => {
//     alert("Got clicked by an arrow function")
// });

// other ways of writing an arrow function
// if an arrow function has one line of code in the body of the function, you can write it down on a single line, but without the {} braces and the return statement if used
arrow.addEventListener('click', (event) => alert("Got clicked by an arrow function"));

// const callArrowFunction = (event) => {
//     alert("Got clicked by an arrow function")
// };

// arrow.addEventListener('click', callArrowFunction);


const sum = (a, b) => {
    return a + b;
}

const anotherSum = (a, b) => a + b;

console.log(anotherSum(1, 3));