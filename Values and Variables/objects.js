// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schemdtmann",
//   age: 2037 - 1991,
//   job: "Teacher",
//   friends: ["Micheal", "Peter", "Steven"],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// // console.log(jonas.'first' + nameKey)

// // const intrestedIn = prompt(
// //   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// // );

// // if (jonas[intrestedIn]) {
// //   console.log(jonas[intrestedIn]);
// // } else {
// //   console.log(
// //     "Wrong request! Choose between firstName, lastName, age, and friends"
// //   );
// // }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonas";
// console.log(jonas);

// // Challenge

// //"Jonas has 3 friends, and his best friend is called Michael"

// console.log(
//   `${jonas["firstName"]} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// Object Methods

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schemdtmann",
//   birthYeah: 1991,
//   job: "Teacher",
//   friends: ["Micheal", "Peter", "Steven"],
//   hasDriversLicense: true,

//   //   calcAge: function(birthYeah){
//   //     return 2037 - birthYeah;
//   //   }

//   // calcAge: function(){
//   //     return 2037 - this.birthYeah;
//   //   }

//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${jonas.calcAge()} year old ${
//       jonas.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   }
// };

// console.log(jonas.calcAge());
// // console.log(jonas['calcAge'](1991))
// console.log(jonas.age);

// // Challenge

// // "Jonas is a 46  year old teacher, and he has a/no driver's license"

// console.log(jonas.getSummary());

// ----------------------------------------------------------------------------------------

//  For Loop in JavaScript

// for(let rep = 1; rep<=10; rep++){
//     console.log(`Lifring weigths reptition ${rep}`)
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037-1991,
//     'teacher',
//     ['Michael','Peter','Steven'],
//     true
// ]
// const types = []
// for(let i = 0; i<jonasArray.length ; i++){
//     // Reading from jonas array
//     console.log(jonasArray[i])
// // Filling Types array
//     // types[i] = typeof jonasArray[i]
//     types.push(typeof jonasArray[i])
// }

// console.log(types)

// const years = [1991,2007,1969,2020]
// const ages = []
// for(let i = 0; i < years.length; i++){
//     ages.push(2037 - years[i])
// }

// console.log(ages)

// // continue and break

// const jonasArray = [
//         'Jonas',
//         'Schmedtmann',
//         2037-1991,
//         'teacher',
//         ['Michael','Peter','Steven'],
//         true
//     ]

// for(let i = 0; i<jonasArray.length ; i++){
//     if(typeof jonasArray[i] !== 'string') continue
//       console.log(jonasArray[i], typeof jonasArray[i])
// }

// for(let i = 0; i<jonasArray.length ; i++){
//     if(typeof jonasArray[i] === 'number') break
//       console.log(jonasArray[i], typeof jonasArray[i])
// }

// While loop -------

// let rep = 1
// while (rep <= 10) {
//     console.log(`While: Lifting weights repetition ${rep}`)
//     rep++
// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) console.log("Loop is about to end");
}
