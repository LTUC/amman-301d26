'use strict';

/*
-|--|-

-|--|-

-|--|-
*/

/*

[
  ['col 0', 'col 1', 'col 2'], // row 0
  ['col 0', 'col 1', 'col 2'], // row 1
  ['col 0', 'col 1', 'col 2'], // row 2
]
*/


// Two dimensional array

// to get access to the two dimensional array 
// You will need some sort of a nested loop (double loop)


const twoDArr = [
  ['col 0 - nimnim', 'col 1 - mishmish', 'col 2 - boogie'], // row 0
  ['col 0 - tostos', 'col 1 - hatra', 'col 2 - lili'], // row 1
  ['col 0 - bejo', 'col 1 - gucci', 'col 2 - namla'], // row 2
];

for (let index = 0; index < twoDArr.length; index++) {
  const row = twoDArr[index];
  // console.log(row);
  console.log(`Row Number ${index}`);

  for (let j = 0; j < row.length; j++) {
    const column = row[j]; // each column will = the value of the list of items in the row array
    console.log(column);
  }

}