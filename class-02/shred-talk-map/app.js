const arrOfNums = [1, 2, 3, 4, 5];

// using forEach Increment each element by 1

const newArrayByOne = [];

arrOfNums.forEach((value) => newArrayByOne.push(value + 1))

console.log('foreach', newArrayByOne)


const newArryMap = arrOfNums.map((value) => {
    return value + 1;
});


console.log('Map', newArryMap)

console.log('Original Array', arrOfNums)