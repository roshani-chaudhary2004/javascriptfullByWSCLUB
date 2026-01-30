//Q1  given an array and print all number double
let num=[1,2,3,4]
let doublenum=num.map((val)=>{
    return val*2;
})
console.log(doublenum); // output 2,4,6,8

//Q2 filter even number(using filter method)
let arr=[1,2,3,4,5,6,7,8,9,10,12,13,14,15]
let evenNumber=arr.filter((num)=>num%2==0)
console.log(evenNumber); // output 2,4,,,6,8,10,12,1


//Q3  // Find the first student with marks less than 35
// const students = [
//   { name: "Amit", marks: 70 },
//   { name: "Riya", marks: 30 },
//   { name: "Rahul", marks: 25 }
// ];

let students = [
  { name: "Amit", marks: 70 },
  { name: "Riya", marks: 30 },
  { name: "Rahul", marks: 25 }
];
let firstStudent=students.find((val)=>val<35);
console.log(firstStudent);// output--(25)
// first sutdent jiski marks less tha 35 hai vo 25 hai
