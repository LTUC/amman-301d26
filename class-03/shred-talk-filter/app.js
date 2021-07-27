'use strict';

const arrOfNum = [1, 2, 3, 4, 5];

const evenMapArr = arrOfNum.map((value) => {
  if (value % 2 === 0) {
    return value;
  }
});

console.log('using map: ', evenMapArr);


const evenFilterArr = arrOfNum.filter((value) => {
  return (value % 2 === 0)
});

console.log('using filter: ', evenFilterArr);