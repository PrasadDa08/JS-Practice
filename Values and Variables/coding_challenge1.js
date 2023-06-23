// coding challenge 1
"use strict";
// const marksHeight = 1.88
// const marksMass = 95
// const jhonsHeight = 1.76
// const jhonsMass = 85

// let marksBMI = marksMass/(marksHeight**2)
// let jhonsBMI = jhonsMass/(jhonsHeight**2)

// let markHigherBMI = marksBMI > jhonsBMI

// console.log(marksBMI)
// console.log(jhonsBMI)
// console.log(markHigherBMI)

// codding challenge 2

// if (markHigherBMI){
//     console.log(`Mark's BMI (${marksBMI})is higher than Jhon's BMI (${jhonsBMI}) !`)
// }else{
//     console.log(`Mark's BMI (${marksBMI})is less     than Jhon's BMI (${jhonsBMI}) !`)
// }

// coding challenge 3

// averageDolphins = (97+112+101)/3
// averageKoalas = (109+95+123)/3
// console.log(averageDolphins, averageKoalas)

// if(averageDolphins>averageKoalas && averageDolphins>=100 && averageKoalas>=100){
//     console.log(`Dolphins are winner`)
// }else if(averageDolphins<averageKoalas && averageDolphins>=100 && averageKoalas>=100){
//     console.log(`Koalas are winner`)
// }else if(averageDolphins===averageKoalas && averageDolphins>=100 && averageKoalas>=100){
//         console.log(`It's a Draw`)
// }else if(averageDolphins<averageKoalas && averageDolphins<100 && averageKoalas>=100){
//             console.log(`Koalas are winner`)
// }else if(averageDolphins>averageKoalas && averageDolphins>=100 && averageKoalas<100){
//     console.log(`Dolphins are winner`)
// }else{
//     console.log("Teams Dosen't scored qulified score")
// }

// coding challenge 4
// const billValue = 430;
// const tip =
//   billValue > 50 && billValue <= 300
//     ? billValue * (15 / 100)
//     : billValue * (20 / 100);
// console.log(
//   `The bill was ${billValue}, the tip was ${tip}, and the total value was ${
//     billValue + tip
//   }`
// );

// coding challenge 5

// let calAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// let scoreDolphins = calAverage(25, 24, 11);
// let scoreKoalas = calAverage(23, 34, 77);

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if(avgKoalas >= avgDolphins*2){
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
//   }else{
//     console.log(`No Team wins`)
//   }
// };

// checkWinner(scoreDolphins,scoreKoalas)

// coding challenge 6

// const calcTip = (bill) => {
//   return bill>=50 && bill<=300 ? bill * 0.15 : bill* 0.2;
// };
// const bills = [125, 555, 44]

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];




// console.log(bills);
// console.log(tips);
// console.log(total);


//  Coading Challenge 7

// const mark = {
//   firstName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function(){
//     this.BMI = this.mass/(this.height**2)
//     return this.BMI
//   },
// }

// const jhon = { 
//   firstName: 'Jhon Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function(){
//     this.BMI = this.mass/(this.height**2)
//     return this.BMI
//   }
// }

// if(mark.calcBMI() > jhon.calcBMI()){
//   console.log(`Mark's BMI(${mark.calcBMI()}) is higher than Jhon's BMI(${jhon.calcBMI()})}`)
// }else{
//   console.log(`Mark's BMI(${mark.calcBMI()}) is Less than Jhon's BMI(${jhon.calcBMI()})}`)
// }


//  Coding Challenge 8 
const calcTip = function(bill){
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

const bills = [22,295,176,440,37,105,10,1100,86,52]
let tips = []
let total = []


for ( let i =0; i < bills.length; i++){
  const tip = calcTip(bills[i])
  tips.push(tip)
  total.push(bills[i] + tip)
}

console.log(tips)
console.log(total)


const calcAverage = function(arr){
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum/arr.length

}

console.log(calcAverage([1,2,3,4,5])) 
console.log(calcAverage(total)) 