// class Animal {
//   noOfLegs;
//   color;
//   family;
//   sound;

//   constructor(noOfLegs, color, family, sound) {
//     this.noOfLegs = noOfLegs;
//     this.color = color;
//     this.family = family;
//     this.sound = sound;
//   }

//   showAnimal() {
//     console.log(`The family of the animal is: ${this.family}`);
//   }
// }

// // let animal = new Animal(4, "brown", "rodent", "phew phew");
// // console.log(animal.noOfLegs);

// class Dog extends Animal {
//   breed;
//   weight;
//   height;
//   hasTail;

//   constructor(breed, weight, height, hasTail, color) {
//     super();
//     super.noOfLegs = 4;
//     super.sound = "Woof!";
//     super.family = "Loyal Animal";
//     super.color = color;
//     this.breed = breed;
//     this.weight = weight;
//     this.height = height;
//     this.hasTail = hasTail;
//   }
// }

// let dog = new Dog("Corgi", "30kgs", "0.5m", true, "Brown");
// // console.log(dog);
// dog.showAnimal()

let details = {
  name: "John",
  age: 24,
  address: {
    city: "New York",
    state: "NY",
    country: "USA",
    passportDetails: {
      passportNumber: "ABCD1234",
    },
  },
};

// let passportNumber = details.address.passportDetails.passportNumber;
// let age = details.age;
// let country = details.address.country;
// let myCity = details.address.city;

let {
  age,
  address: {
    city: myCity,
    country,
    passportDetails: { passportNumber },
  },
} = details;

console.log(age, myCity, country, passportNumber);
