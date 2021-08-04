'use strict';

let person =
{
  "name": "John",
  "role": "Dad",
  "interests": ["Coaching", "Teaching"]
};

// for (let key in person) { // for every key property in person object
//   // console.log(`key: ${key}, `, `value: ${person[key]}`);
//   console.log(typeof key);
//   console.log(person.key); // person."name"
//   console.log(person[key]); // person["name"]
// }

// Object keys method takes the object and will return an array of keys from that object
// console.log(Object.keys(person));

// const arrOfKeys = Object.keys(person);

// arrOfKeys.forEach(key => console.log(person[key]));


console.log(Object.entries(person));

