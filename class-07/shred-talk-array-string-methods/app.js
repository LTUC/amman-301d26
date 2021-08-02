'use strict';
/**
 * Split()
 * is a string method
 * converts a string into an array using a separator
 * the original string is not mutated
 */

const exampleString = 'Hello World';
const splittedString = exampleString.split(' ');
console.log('Splitted string', splittedString);
// console.log(exampleString);

/**
 * join()
 * turns a string back into an array
 * the parameter that the join method takes is the character we are going to use to join/ glue back the array into a string
 * that the original array is not mutated
 */

// let gluedArray = splittedString.join();
// let gluedArray = splittedString.join('');
// let gluedArray = splittedString.join('_');
let gluedArray = splittedString.join(' ');
console.log('joined array', gluedArray);


/**
 * slice()
 * our pizza slicer
 * takes two paramter( the start index of the item we want to slice, the end index of how many items we want to slice off from the array);
 * the original array is no mutated
 */

const alferdoPizza = [
  'pizza slice number 1',
  'pizza slice number 2',
  'pizza slice number 3',
  'pizza slice number 4',
  'pizza slice number 5',
  'pizza slice number 6',
  'pizza slice number 7',
  'pizza slice number 8',
  'pizza slice number 9',
  'pizza slice number 10',
];

console.log('largest pizza slice 🍕', alferdoPizza.slice(3, 4));
console.log('greedy slice 🍕 🍕 🍕', alferdoPizza.slice(2, 5));

/**
 * splice()
 * the splice method is used to modify the array
 * we can either add elements to our array
 * or we can remove elements from our array
 * or we can replace items from the array
 */

let arr = ['a', 'b', 'c', 'd', 'e'];

// i want to remove the b character item from the array using splice
// arr.splice(1, 1);
// console.log('spliced character B from the array', arr);

// i want to replace the character c with F
// arr.splice(2, 1, 'f');
// console.log('f being added instead of the char C', arr);

// i want to add the character f after c
arr.splice(3, 0, 'f');
console.log('f being added after the char C', arr);
