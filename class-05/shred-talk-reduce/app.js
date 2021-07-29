'use strict';

const arrOfNum = [1, 2, 3, 4, 5];

// let sum = 0;

// arrOfNum.forEach(value => sum += value);


const sum = arrOfNum.reduce((previous, current) => {
  console.log('previous', previous);
  console.log('current', current);
  console.log('=========');

  return previous += current;
});
// console.log(sum);


let people = [
  { name: 'Fred', role: 'Developer' },
  { name: 'Suzy', role: 'Developer' },
  { name: 'Gina', role: 'Manager' },
  { name: 'Jim', role: 'Support' }
];


const folk = people.reduce((acc, person) => {

  acc[person.name] = person.role;

  return acc;
}, {})

console.log(folk);