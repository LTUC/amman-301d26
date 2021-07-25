'use strict';


// pascal notation : Having the first character in the function name an uppercase character


// a model is the shape of how the data/ object will look like

// function Animal(type, breed) {
//     this.type = type;
//     this.breed = breed;
// }

// function Cat(type, breed, color, furType) {
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.furType = furType;
// }

// Animal.prototype.eat = function () {
//     alert('the animal is now eating!')
// };


// const cat = new Animal("cat", "orange tabby");

// console.log(cat);


// cat.eat();


class Animal {

    constructor(type, breed) {
        this.type = type;
        this.breed = breed;
    }

    eat = () => {
        alert('the animal is now eating');
    }
}

class Cat extends Animal {

    constructor(type, breed, furType, name) {
        super(type, breed);
        this.furType = furType;
        this.name = name;
    }

    sleepInTheSun = () => {
        alert("The cat is sleeping in the sun!");
    }
}


const cat = new Cat("cat", "orange tabby", "short Hair", "nim nim");

console.log(cat);

// cat.sleepInTheSun();

// cat.eat();

