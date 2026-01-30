//Q1 if a=[90,85,88] print the first and third values
let a=[90,85,88];
let[e,r,t]=a;
console.log(e); // output 90
console.log(t); // output 88

//Q2 how to extract the city from the object
//   let user={
// name:"lia",
// address:{
// city:"tokyo"
//}
//};

 let user={
 name:"lia",
 address:{
city:"tokyo"
}
};
let{address:{city}}=user;
console.log(city); //output--- tokyo


//Q3 print the value
let l1=[1,2,3,4]
let l2=[4,5,6,7]
let finalArray=[...l1,...l2] // shalow copy huya
console.log(finalArray); // output-- 1,2,3,4,4,5,6,7

// addvalues starting and last in l1
l1=[25,...l1,50]   // 15 add starting and 50 add in last
console.log(l1); //output 25,1,2,3,4,50

